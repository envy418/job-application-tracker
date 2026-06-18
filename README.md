# 🚀 Job Application Tracker

A full-stack MERN application designed to help job seekers organize, track, and manage their job applications efficiently. Keep all your applications in one place, monitor progress through different hiring stages, and stay organized throughout your job search.

---

## 📌 Features

### Job Management

* Add new job applications
* Update existing application details
* Delete applications
* View all applications in a centralized dashboard
* Filter by Status
* Search by company name or job title

### Application Tracking

Track important information including:

* Job Title
* Company Name
* Application URL
* Date Applied
* Current Status

### Status Workflow

Supported application statuses:

* Applied
* Interviewing
* Rejected
* Offer

### Dashboard View

* View all applications at a glance
* Quickly update application progress
* Manage job search activities efficiently

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS / Tailwind CSS
* React Toastify
* SweetAlert2

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Development Tools

* dotenv
* CORS
* concurrently

---

## 📁 Project Structure

```text
job-application-tracker/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobForm.jsx
│   │   │   ├── JobList.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   └── jobController.js
│   │
│   ├── models/
│   │   └── Job.js
│   │
│   ├── routes/
│   │   └── jobRoutes.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
│   └── package.json
│
├── .env
├── .gitignore
├── package.json
└── README.md
```


---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/envy418/job-application-tracker.git
cd job-application-tracker
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

If OpenAI integration is included:

```env
OPENAI_API_KEY=your_openai_api_key
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm start
```

Application URL:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:5000
```

---

## 📬 API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /api/jobs     | Fetch all jobs   |
| POST   | /api/jobs     | Create a new job |
| PUT    | /api/jobs/:id | Update a job     |
| DELETE | /api/jobs/:id | Delete a job     |

---

## 📸 Screenshots

Add screenshots here:

```md
<img width="1893" height="986" alt="image" src="https://github.com/user-attachments/assets/b3dde0cd-a739-4dd6-bca8-bb9993cd8f47" />
<img width="1917" height="995" alt="image" src="https://github.com/user-attachments/assets/c669a1e1-7ba5-4826-8803-0162585ac13f" />
<img width="401" height="888" alt="image" src="https://github.com/user-attachments/assets/35e25915-d60d-4630-80ae-a333eddbc0dc" />
<img width="400" height="897" alt="image" src="https://github.com/user-attachments/assets/36891ce7-2bac-4ad1-b04a-639befb42fff" />



```

---

## 🎯 Future Enhancements

* User Authentication
* Resume Upload Support
* Interview Tracking
* Email Notifications
* Analytics Dashboard
* AI Resume Suggestions
* Dark Mode

---

## 🧠 What I Learned

* Building RESTful APIs with Express.js
* Integrating React with a Node.js backend
* Managing MongoDB databases with Mongoose
* Implementing CRUD operations
* Handling asynchronous API requests with Axios
* Structuring full-stack MERN applications

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Bhushan  Bartaula**

GitHub: https://github.com/envy418

Feel free to connect, contribute, or provide feedback.
