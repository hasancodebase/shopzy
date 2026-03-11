# Shopzy 🛍 — Full Stack Ecommerce App

A professional, market-ready ecommerce web application built with the MERN stack.

## 🌐 Live Demo
- Frontend: [coming soon]
- Backend API: [coming soon]

## 🛠 Tech Stack
- **Frontend:** React 19, Vite, React Router v7, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcryptjs
- **Styling:** CSS3, Tailwind CSS, Bootstrap 5
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## ✨ Features
- 🔐 Secure user registration and login with bcrypt password hashing
- 🛒 Full shopping cart with quantity controls and localStorage persistence
- 📦 Complete checkout and order placement flow
- 🔍 Product search and sort functionality
- 📱 Responsive design — works on all screen sizes
- 🔒 Protected routes — checkout requires authentication
- 🎨 Professional UI with hero banner, footer, and polished pages
- 📄 About, Contact, and 404 pages included

## 📁 Project Structure
```
shopzy/          → React frontend (Vite)
shopzy-backend/  → Node.js + Express backend
```

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Backend Setup
```bash
cd shopzy-backend
npm install
```

Create `.env` file:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm run server
```

### Frontend Setup
```bash
cd shopzy
npm install
npm run dev
```

## 🔑 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for JWT tokens |

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/products | Add product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/orders | Place order (auth required) |
| GET | /api/orders | Get my orders (auth required) |

## 🔒 Security Features
- Passwords hashed with bcrypt (salt rounds: 10)
- JWT tokens expire in 7 days
- Protected routes on frontend and backend
- Password never returned in API responses
- Duplicate email prevention on registration

## 👨‍💻 Developer Notes
- Cart persists across page refreshes via localStorage
- Products served from MongoDB with DummyJSON API as fallback
- All API calls use try/catch error handling
- Frontend uses React Context for global state management

## 📝 License
MIT License — free to use for personal and commercial projects