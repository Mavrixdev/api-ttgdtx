"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const logger_1 = require("../utils/logger");
const response_1 = require("../utils/response");
class NewsController {
    static async getNews(req, res) {
        try {
            logger_1.Logger.info('GET /news - Scraping news data');
            const targetUrl = 'https://ttgdnn-gdtxcumgar.edu.vn/categories/tin-tuc-2.html';
            const response = await axios_1.default.get(targetUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                },
                timeout: 10000
            });
            const $ = cheerio.load(response.data);
            const articles = [];
            $('.categoryList .article-item').each((index, element) => {
                const $article = $(element);
                const title = $article.find('h4 a').text().trim();
                const link = $article.find('h4 a').attr('href');
                const description = $article.find('.text-justify').text().trim();
                const imageSrc = $article.find('img').attr('src');
                const imageAlt = $article.find('img').attr('alt') || title;
                const baseUrl = 'https://ttgdnn-gdtxcumgar.edu.vn';
                const fullLink = link ? (link.startsWith('http') ? link : baseUrl + link) : '';
                const fullImageSrc = imageSrc ? (imageSrc.startsWith('http') ? imageSrc : baseUrl + imageSrc) : '';
                if (title) {
                    articles.push({
                        id: index + 1,
                        title,
                        description,
                        link: fullLink,
                        image: {
                            src: fullImageSrc,
                            alt: imageAlt
                        },
                        publishedAt: new Date().toISOString()
                    });
                }
            });
            logger_1.Logger.success(`Successfully scraped ${articles.length} news articles`);
            response_1.ResponseHandler.success(res, {
                source: targetUrl,
                totalArticles: articles.length,
                articles,
                scrapedAt: new Date().toISOString()
            }, 'Lấy tin tức thành công');
        }
        catch (error) {
            logger_1.Logger.error('Error scraping news:', error);
            response_1.ResponseHandler.error(res, 'Không thể lấy dữ liệu tin tức', 500, error.message);
        }
    }
}
exports.NewsController = NewsController;
//# sourceMappingURL=newsController.js.map