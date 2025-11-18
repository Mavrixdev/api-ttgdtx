@echo off
echo Starting Mavrix Server (Backend and Frontend)...

REM Start Backend
start "Backend Server" cmd /k "cd backend && npm run dev"

REM Start Frontend (serve static files on port 3000)
start "Frontend Server" cmd /k "cd frontend && npx serve -p 3000"

echo Servers started. Backend on http://localhost:3001, Frontend on http://localhost:3000
pause
