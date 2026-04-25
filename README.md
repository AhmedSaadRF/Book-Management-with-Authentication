# 📚 Book Management API with Authentication

A secure RESTful API for managing books with user authentication (JWT). Built with **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JSON Web Tokens**.

---

## 🚀 Features

- User registration & login (password hashed with bcrypt)
- JWT-based authentication (protected routes)
- CRUD operations for books (create, read, update, delete)
- User-specific books (each user sees/manages their own books)
- Error handling and input validation
- MongoDB Atlas cloud database

---

## 🛠️ Tech Stack

| Category       | Tools                                          |
|----------------|------------------------------------------------|
| Runtime        | Node.js                                        |
| Framework      | Express                                        |
| Database       | MongoDB + Mongoose ODM                         |
| Authentication | JWT (jsonwebtoken), bcrypt                    |
| Middleware     | body-parser                                    |
| Dev tool       | nodemon (auto-restart)                        |

---

## 📁 Folder Structure (Expanded Tree)

```plaintext
project-root/
├── controllers/
│   ├── books.controller.js
│   └── users.controller.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── books.model.js
│   └── users.model.js
├── routers/
│   ├── books.router.js
│   └── users.router.js
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── README.md
🔧 Installation & Setup
1. Clone the repository
bash
git clone https://github.com/AhmedSaadRF/book-management-auth.git
cd book-management-auth
2. Install dependencies
bash
npm install
3. Environment variables (create a .env file)
env
PORT=3300
MONGODB_URI=mongodb+srv://AhmedRFRF:23684539000@ahmedrfrf.tzlsybc.mongodb.net/?retryWrites=true&w=majority&appName=AhmedRFRF
JWT_SECRET=your_super_secret_key_change_this
⚠️ Important: Never push .env to GitHub. The above is for demonstration – use your own secret in production.

4. Start the server
bash
npm start
# or with nodemon for development:
nodemon index.js
Server runs on http://localhost:3300 (or your defined port).

📡 API Endpoints
Authentication & Users
Method	Endpoint	Description	Auth required
POST	/register	Register a new user	❌
POST	/login	Login user, returns JWT token	❌
GET	/users	Get all users (admin only)	✅ (future)
Request examples:

POST /register
Body: { "username": "john", "email": "john@example.com", "password": "123456" }

POST /login
Body: { "email": "john@example.com", "password": "123456" }
Response: { "token": "eyJhbGc...", "user": {...} }

Books (protected routes – include token in Authorization header)
Method	Endpoint	Description	Auth required
GET	/books	Get all books of logged-in user	✅
GET	/books/:id	Get a single book by ID	✅ (owner only)
POST	/books	Create a new book	✅
PUT	/books/:id	Update a book	✅ (owner only)
DELETE	/books/:id	Delete a book	✅ (owner only)
Request example (create book):
POST /books
Header: Authorization: Bearer <JWT_TOKEN>
Body: { "title": "The Hobbit", "author": "J.R.R. Tolkien", "year": 1937 }

🧪 Testing with Postman / cURL
Register a user.

Login to get a token.

Copy the token and add it to the Authorization header for book endpoints.

🐞 Common Issues & Solutions
MongoDB connection error
Check your network/IP whitelist in MongoDB Atlas.

Verify the username/password in the connection string.

401 Unauthorized on book routes
Ensure you are sending the token in the header exactly as:
Authorization: Bearer <token> (space after Bearer).

403 Forbidden when accessing another user's book
This is intentional – you can only access/modify books you own.

📌 Future Improvements
Add role-based access (admin/user)

Pagination and filtering for books

Refresh tokens mechanism

Input validation with Joi or express-validator

Logging with Winston

👨‍💻 Author
Ahmed Saad Alrefaey (RFRF)

GitHub: @AhmedSaadRF

Portfolio: ahmed-alrefaey.vercel.app

⭐️ If you find this API useful, give it a star on GitHub!
