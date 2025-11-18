import { Request, Response, Router } from 'express';
import { AlbumsController } from '../controllers/albums';
import { GioiThieuController } from '../controllers/goithieu';
import { KeHoachController } from '../controllers/KeHoach';
import { LuongTruyCapController } from '../controllers/luongtruycap';
import SysInfoController from '../controllers/sysinfo';
import { ScheduleController } from '../controllers/thoikhoabieu';
import { ThongBaoController } from '../controllers/thongbao';
import { NewsController } from '../controllers/tintuc';

// Load endpoints metadata from a single JSON file so maintainers can update one file
// without touching route registration or docs.
import endpoints from '../config/endpoints.json';

const router = Router();

// Register routes using the controllers
router.get('/tkb', ScheduleController.getSchedule);
router.get('/news', NewsController.getNews);
router.get('/kehoach', KeHoachController.getKeHoach);
router.get('/thongbao', ThongBaoController.getThongBao);
router.get('/luongtruycap', LuongTruyCapController.getLuongTruyCap);

router.get('/albums', AlbumsController.getAlbums);
router.get('/sysinfo', (req: Request, res: Response) => SysInfoController.handle(req, res));
router.get('/gioithieu', GioiThieuController.getGioiThieu);


// Endpoint to expose the list of routes to the frontend (used by docs page)
router.get('/__endpoints', (_req: Request, res: Response) => {
  // Return a copy so callers can't mutate our internal structure
  const exported = (endpoints as Array<any>).map(e => ({ method: e.method, path: e.path, title: e.title, description: e.description, exampleResponse: e.exampleResponse }));
  res.json(exported);
});

export default router;
