# API Explorer - Full Stack Project

Modern API Explorer with Glassmorphism UI and Node.js Backend

## 🚀 Project Structure

```
api-explorer-project/
├── frontend/              # Frontend application
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── backend/              # Backend API server
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 📦 Features

### Frontend
- ✅ Modern Glassmorphism UI
- ✅ Responsive Design (Mobile/Tablet/Desktop)
- ✅ API Fetching with Loading Animation
- ✅ Beautiful JSON Formatting
- ✅ Error Handling
- ✅ Neon Glow Effects

### Backend
- ✅ Node.js + Express + TypeScript
- ✅ RESTful API
- ✅ CORS Enabled
- ✅ Error Handling Middleware
- ✅ Health Check Endpoint
- ✅ Sample Data API

## 🛠️ Installation

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on: `http://localhost:3001`

### Frontend Setup

Simply open `frontend/index.html` in your browser or use a local server:

```bash
cd frontend
# Using Python


# Using Node.js http-server
npx http-server -p 8080
```

Frontend will be available at: `http://localhost:8080`

## 🔌 API Endpoints

### Health Check
```
GET /health
```

### Get Schedule (Thời khóa biểu)
```
GET /tkb
```

Response:
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

## 🎨 Color Scheme

- Background: `#0f0f13`
- Glass: `rgba(255, 255, 255, 0.1)`
- Primary: `#3a7afe`
- Glow: `#5ea0ff`
- Text: `#f3f4f6`

## 📝 Usage

1. Start the backend server
2. Open the frontend in browser
3. Enter API URL: `http://localhost:3001/tkb`
4. Click "Fetch API"
5. View beautiful formatted results

## 🔧 Technologies

### Frontend
- HTML5
- CSS3 (Glassmorphism)
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- TypeScript
- CORS

## 📄 License

MIT License
