# 🛠️ Setup Guide - API Explorer Project

## 📋 Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git** (optional)

## 📁 Project Structure

```
api-explorer-project/
├── frontend/              # React-like HTML/CSS/JS frontend
│   ├── index.html        # Main HTML file
│   ├── styles.css        # Glassmorphism styling
│   └── script.js         # API fetching logic
├── backend/              # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route handlers
│   │   ├── middlewares/  # Express middlewares
│   │   ├── routes/       # API routes
│   │   ├── types/        # TypeScript types
│   │   ├── utils/        # Utility functions
│   │   ├── app.ts        # Express app setup
│   │   └── server.ts     # Server entry point
│   ├── package.json      # Dependencies
│   ├── tsconfig.json     # TypeScript config
│   └── .env.example      # Environment variables
├── README.md             # Project documentation
├── QUICKSTART.md         # Quick start guide
└── SETUP.md             # Detailed setup (this file)
```

## 🚀 Installation & Setup

### Step 1: Clone/Download Project

```bash
# If using git
git clone <repository-url>
cd api-explorer-project

# Or download and extract ZIP file
unzip api-explorer-project.zip
cd api-explorer-project
```

### Step 2: Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env if needed (optional)
# PORT=:3001
# NODE_ENV=development
# CORS_ORIGIN=http://localhost:8080
```

### Step 3: Setup Frontend

```bash
cd ../frontend

# Frontend is static HTML/CSS/JS, no installation needed
# Just ensure files are in correct location
ls -la
# Should see: index.html styles.css script.js
```

## 🏃‍♂️ Running the Application

### Development Mode

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd frontend

# Option 1: Simple HTTP Server (Python)
python -m http.server 8080

# Option 2: Node.js http-server
npx http-server -p 8080

# Option 3: PHP built-in server
php -S localhost:8080

# Option 4: Open directly in browser
# Just double-click index.html (may have CORS issues)
```

### Production Mode

#### Backend
```bash
cd backend
npm run build
npm start
```

#### Frontend
Deploy static files to any web server (Apache, Nginx, etc.)

## 🔧 Configuration

### Backend Configuration (.env)

```env
# Server
PORT=:3001
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:8080

# API
API_PREFIX=/api
API_VERSION=v1
```

### Frontend Configuration

Edit `frontend/script.js` if needed:

```javascript
// Default API URL
const DEFAULT_API_URL = 'http://localhost:3001/tkb';
```

## 🧪 Testing

### Manual Testing

1. **Health Check**
   ```bash
   curl http://localhost:3001/health
   # Expected: {"success":true,"message":"Server is healthy"}
   ```

2. **API Endpoint**
   ```bash
   curl http://localhost:3001/tkb
   # Expected: JSON response with schedule data
   ```

3. **Frontend**
   - Open `http://localhost:8080`
   - Enter `http://localhost:3001/tkb` in input
   - Click "Fetch API"
   - Should display formatted JSON

### Automated Testing

```bash
cd backend

# Install test dependencies (if added)
npm install --save-dev jest supertest

# Run tests
npm test
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Port Already in Use

```bash
# Check what's using port :3001
netstat -ano | findstr ::3001

# Kill process
taskkill /PID <PID> /F

# Or change port in .env
PORT=3001
```

#### 2. CORS Errors

```
Access to XMLHttpRequest at 'http://localhost:3001' from origin 'http://localhost:8080' has been blocked by CORS policy
```

**Solution:**
- Ensure backend is running
- Check CORS_ORIGIN in .env matches frontend URL
- Restart backend after changing .env

#### 3. Module Not Found Errors

```bash
npm install
# or
npm install --save-dev @types/node
```

#### 4. TypeScript Errors

```bash
cd backend
npm run build
# Check for compilation errors
```

### Debug Mode

#### Backend Debug
```bash
cd backend
DEBUG=* npm run dev
```

#### Frontend Debug
- Open browser DevTools (F12)
- Check Console tab for JavaScript errors
- Check Network tab for failed requests

## 📊 API Documentation

### Endpoints

#### GET /health
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is healthy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### GET /tkb
Get schedule information.

**Response:**
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

## 🚀 Deployment

### Backend Deployment

```bash
cd backend

# Build for production
npm run build

# Start production server
npm start

# Or use PM2
npm install -g pm2
pm2 start dist/server.js --name "api-explorer"
```

### Frontend Deployment

Deploy static files to:
- **Netlify**: Drag & drop `frontend/` folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Use GitHub Actions
- **AWS S3 + CloudFront**: Static hosting

## 📈 Performance Optimization

### Backend
- Enable gzip compression (already configured)
- Use clustering for multi-core CPUs
- Implement caching (Redis)
- Database connection pooling

### Frontend
- Minify CSS/JS for production
- Enable browser caching
- Use CDN for static assets
- Implement lazy loading

## 🔒 Security Considerations

### Backend
- Input validation with Joi/Zod
- Rate limiting
- Helmet for security headers
- JWT authentication (ready for extension)

### Frontend
- Content Security Policy
- XSS protection
- Secure API calls (HTTPS in production)

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Glassmorphism CSS Guide](https://css-tricks.com/glassmorphism-css/)
- [CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

For issues and questions:
1. Check this setup guide
2. Review troubleshooting section
3. Check GitHub issues
4. Create new issue with detailed information

---

**Happy coding! 🎉**
