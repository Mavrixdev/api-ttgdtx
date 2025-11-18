# 🚀 Quick Start Guide - API Explorer

## ⚡ Bắt đầu nhanh (5 phút)

### 1. Cài đặt Backend

```bash
cd api-explorer-project/backend
npm install
```

### 2. Chạy Backend Server

```bash
npm run dev
```

Backend sẽ chạy tại: `http://localhost:3001`

### 3. Test API

Mở browser và truy cập:
- **Health Check**: http://localhost:3001/health
- **Thời khóa biểu**: http://localhost:3001/tkb

### 4. Mở Frontend

Mở file `api-explorer-project/frontend/index.html` trong browser hoặc sử dụng local server:

```bash
cd api-explorer-project/frontend
python -m http.server 8080
# Hoặc
npx http-server -p 8080
```

Frontend sẽ chạy tại: `http://localhost:8080`

### 5. Test Full Application

1. Mở frontend tại `http://localhost:8080`
2. Nhập URL: `http://localhost:3001/tkb`
3. Click "Fetch API"
4. Xem kết quả đẹp mắt với glassmorphism UI

## 📋 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Kiểm tra trạng thái server |
| `/tkb` | GET | Lấy thông tin thời khóa biểu |

## 🎨 Demo Data

```json
{
  "success": true,
  "message": "Lấy thời khóa biểu thành công",
  "data": {
    "title": "Thời khóa biểu áp dùng từ 17-11-2025",
    "description": "Thời khóa biểu mới áp dụng từ ngày 17-11-2025",
    "link": "https://ttgdnn-gdtxcumgar.edu.vn/thoi-khoa-bieu-ap-dung-tu-17-11-2025-41.html"
  }
}
```

## 🔧 Troubleshooting

### Backend không chạy
```bash
# Kiểm tra port :3001 có bị chiếm không
netstat -ano | findstr ::3001

# Kill process nếu cần
taskkill /PID <PID> /F
```

### Frontend không load được
- Đảm bảo CORS được cấu hình đúng
- Kiểm tra URL backend có đúng không

### API trả về lỗi
- Kiểm tra backend có đang chạy không
- Kiểm tra URL endpoint

## 🎯 Features

✅ **Frontend**: Glassmorphism UI, Responsive, Loading Animation
✅ **Backend**: Node.js + Express + TypeScript, RESTful API
✅ **Integration**: Full-stack application với API testing

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. Dependencies đã cài đặt chưa
2. Ports không bị conflict
3. URLs đúng format

**Enjoy your modern API Explorer! 🎉**
