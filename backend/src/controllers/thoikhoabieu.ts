import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Logger } from '../utils/logger';
import { ResponseHandler } from '../utils/response';

export class ScheduleController {
  static async getSchedule(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      Logger.info('GET /tkb - Scraping schedule page');

      const targetUrl = 'https://ttgdnn-gdtxcumgar.edu.vn/categories/thoi-khoa-bieu-34.html';

      const response = await axios.get(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        timeout: 10000
      });

      const $ = cheerio.load(response.data);

      const items: any[] = [];

      // Page appears to use .categoryList and .article-item like news page
      $('.categoryList .article-item').each((index, element) => {
        const $el = $(element);

        const title = $el.find('h4 a').text().trim() || $el.find('h3 a').text().trim();
        const link = $el.find('h4 a').attr('href') || $el.find('h3 a').attr('href') || '';
        const description = $el.find('.text-justify').text().trim() || $el.find('p').text().trim() || '';
        const imageSrc = $el.find('img').attr('src') || '';

        const baseUrl = 'https://ttgdnn-gdtxcumgar.edu.vn';
        const fullLink = link ? (link.startsWith('http') ? link : baseUrl + link) : '';
        const fullImage = imageSrc ? (imageSrc.startsWith('http') ? imageSrc : baseUrl + imageSrc) : '';

        if (title) {
          items.push({
            id: index + 1,
            title,
            description,
            link: fullLink,
            image: fullImage,
            scrapedAt: new Date().toISOString()
          });
        }
      });

      Logger.success(`Scraped ${items.length} schedule items`);

      ResponseHandler.success(res, {
        // source: targetUrl,
        total: items.length,
        items,
        scrapedAt: new Date().toISOString()
      }, 'Lấy thời khóa biểu thành công', 200);
    } catch (error) {
      Logger.error('Error scraping schedule page:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      ResponseHandler.error(res, 'Không thể lấy thời khóa biểu', 500, errorMessage);
      next(error);
    }
  }
}
