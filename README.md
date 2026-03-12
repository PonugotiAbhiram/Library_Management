# 📚 VNR VJIET — Department Library Management System

A full-stack web-based Library Management System developed for
Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering
and Technology. The system digitizes the entire library workflow with
role-based access for Admin, Faculty and Students.

---

## 🚀 Tech Stack

- **Frontend** — HTML5, CSS3, Vanilla JavaScript
- **Backend** — Node.js, Express.js
- **Database** — MongoDB Atlas (Cloud)
- **Auth** — JSON Web Tokens (JWT)
- **ODM** — Mongoose

---

## 👥 User Roles

| Role | Permissions |
|---|---|
| Admin | View all books, users and activity logs |
| Faculty | Browse books, borrow (14 days), read at library |
| Student | Browse books, read at library only |

---

## 📁 Project Structure
```
vnr-library/
│
├── final-backend/              # Node.js Backend
│   ├── server.js               # Entry point
│   ├── .env                    # Environment variables
│   ├── models/
│   │   ├── User.js
│   │   ├── Book.js
│   │   ├── Transaction.js
│   │   └── ActivityLog.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── books.js
│   │   ├── transactions.js
│   │   └── logs.js
│   └── middleware/
│       └── auth.js
│
└── vnr-library-ui/             # Frontend
    ├── index.html              # Homepage
    ├── login.html              # Login page
    ├── admin-dashboard.html    # Admin dashboard
    ├── faculty-dashboard.html  # Faculty dashboard
    ├── student-dashboard.html  # Student dashboard
    └── assets/
        └── logo.png
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- MongoDB Compass (optional)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/vnr-library.git
cd vnr-library
```

### 2. Install backend dependencies
```bash
cd final-backend
npm install
```

### 3. Configure environment variables
Create a `.env` file inside `final-backend/`:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/Library_Management?appName=Cluster0
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Start the backend server
```bash
node server.js
```
Server runs on `http://localhost:5000`

### 5. Open the frontend
Open `vnr-library-ui/index.html` in your browser.

---

## 🗄️ Database Collections

| Collection | Description |
|---|---|
| `books` | 956+ books with availability tracking |
| `bookCopies` | Individual physical copies of each book |
| `users` | Admin, faculty and student accounts |
| `transactions` | Borrow, return and reading session records |
| `activityLogs` | Human-readable audit trail for admin |

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/login | Login and get JWT token |
| GET | /api/auth/me | Get current user info |

### Books
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/books | Get all books |
| GET | /api/books/:id | Get single book |

### Transactions
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/transactions/borrow | Borrow a book (faculty only) |
| POST | /api/transactions/reading | Log reading session |
| POST | /api/transactions/return | Return a book |
| GET | /api/transactions/my | Get my transactions |

### Logs
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/logs | Get activity logs |

---

## 📌 Features

- ✅ Role-based authentication with JWT
- ✅ 956+ books imported from real library data
- ✅ Real-time book availability tracking
- ✅ Borrow and return management for faculty
- ✅ In-library reading session logging
- ✅ Admin activity monitoring dashboard
- ✅ Live book search by title, author or number
- ✅ Cloud-hosted on MongoDB Atlas
- ✅ Professional VNR VJIET branded UI
- 🔜 Overdue book notifications
- 🔜 Fine management system
- 🔜 Admin user management panel

---

## 🏛️ Institution

**Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and Technology**
Hyderabad, Telangana, India

---

## 📄 License

This project is developed for academic purposes at VNR VJIET.
