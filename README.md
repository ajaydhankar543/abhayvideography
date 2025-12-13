# Full Stack App - Frontend + Backend

A simple full-stack application built with Vite + Tailwind CSS (frontend) and Node.js/Express (backend).

## 📁 Project Structure

```
abhayvideography/
├── frontend/          # Vite + Tailwind CSS app
│   ├── src/
│   │   ├── main.js   # Main app with menubar navigation
│   │   ├── style.css # Tailwind styles
│   │   └── index.html
│   └── package.json
├── backend/          # Node.js/Express server
│   ├── server.js     # API server
│   └── package.json
└── README.md
```

## 🚀 How to Run

### Terminal 1: Start Backend Server

```bash
cd backend
npm start
```

The backend will run at `http://localhost:3000`

**Available Endpoints:**
- `GET /` - Welcome message with available endpoints
- `GET /api/data` - Returns sample JSON data
- `GET /api/health` - Health check endpoint

### Terminal 2: Start Frontend Dev Server

```bash
cd frontend
npm run dev
```

The frontend will run at `http://localhost:5173`

## 📱 Frontend Features

### Menubar Navigation
Two main sections accessible from the top navigation bar:

#### 1. Frontend Tab
- Simple form with text input
- Submit button to display entered text
- Shows status indicator that frontend is working

#### 2. Backend Tab
- "Fetch API Data" button
- Calls the backend API at `/api/data`
- Displays JSON response in a formatted code block
- Shows loading state while fetching
- Displays error messages if API call fails

## 🔌 API Integration

The frontend fetches data from the backend using the Fetch API:

```javascript
fetch('http://localhost:3000/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
```

**Sample Response:**
```json
{
  "status": "success",
  "message": "Backend is working!",
  "timestamp": "2025-12-14T10:30:00.000Z",
  "data": [
    { "id": 1, "name": "Item 1", "description": "This is the first item" },
    { "id": 2, "name": "Item 2", "description": "This is the second item" },
    { "id": 3, "name": "Item 3", "description": "This is the third item" }
  ],
  "serverInfo": {
    "version": "1.0.0",
    "environment": "development",
    "apiEndpoint": "/api/data"
  }
}
```

## 🛠️ Technologies Used

- **Frontend:** Vite, Tailwind CSS, Vanilla JavaScript
- **Backend:** Node.js, Express.js, CORS
- **No external databases** - Uses in-memory data

## ✅ Testing Checklist

1. Start both servers
2. Open frontend at `http://localhost:5173`
3. Test **Frontend Tab:**
   - Enter text in input field
   - Click Submit
   - Verify text appears in output
4. Test **Backend Tab:**
   - Click "Fetch API Data"
   - Verify JSON data displays
   - Check all fields are present
5. Verify no errors in browser console or terminal

## 📝 Next Steps

You can now:
- Modify the frontend UI and styles in `frontend/src/`
- Add more API endpoints in `backend/server.js`
- Fetch different data from the Backend tab
- Add form submissions or other interactive features

Enjoy building! 🎉
