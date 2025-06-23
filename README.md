# 💬 Fullstack ChatApp

A real-time chat application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and **Socket.IO** for instant, bidirectional messaging. Includes support for **one-to-one and group chats**, authentication, user search, and an impressive **35 theme options** for personalized UI experiences.

## 🚀 Live Demo

🔗 [Click here to try it out](https://fullstack-chatapp-81nb.onrender.com/)



## ⚙️ Features

- 🔐 User authentication (Register/Login)
- 🔍 Show online users
- 💬 One-to-one  chat support
- 🟢 Real-time messaging with **Socket.IO**
- 🧑‍🤝‍🧑 Create, rename, and manage chats
- 🎨 Switch between **35 unique themes**
- 📸 Upload and display profile pictures
- 🔐 JWT-based protected routes
- 📦 Modular backend and frontend structure

---

## 🏗️ Tech Stack

### 🌐 Frontend
- React.js
- Axios
- React Router DOM
- Context API
- tailwind with daisyUi (with 35 theme support)

### 🛠️ Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT (Authentication)
- bcryptjs (Password encryption)
- dotenv (Environment management)

---

## 📁 Folder Structure

fullstack-chatapp/
│
├── frontend/ # React frontend app
│ ├── src/
│ ├── public/
│ └── ...
│
├── backend/ # Express + MongoDB backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── ...
│
├── .gitignore
├── README.md
└── ...

yaml
Copy code

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js
- MongoDB (local or cloud URI)
- Git

---

### 🛠️ Installation

#### 1. Clone the repo

```bash
git clone https://github.com/iamakkudev/fullstack-chatApp.git
cd fullstack-chatApp
2. Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file inside the backend directory:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
npm start
3. Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm run dev
Frontend will run on http://localhost:3000

🎯 Future Features (Ideas)
✅ Push Notifications

✅ Read receipts

✅ Online/Offline indicators

✅ Voice and Video Calling

✅ Chat message editing & deletion

✅ Admin roles in group chats

🤝 Contributing
Contributions, issues and feature requests are welcome!
Feel free to fork this repo and submit a PR.


🙌 Acknowledgments
React

Express

MongoDB

Socket.IO

