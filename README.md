# StudyNotion

StudyNotion is a full-stack ed-tech platform built using the MERN stack. It provides a seamless learning experience where students can explore and purchase courses while instructors can create and manage educational content.

---

# Features

## Student Features

* User authentication and authorization
* Browse available courses
* Purchase courses
* Watch course videos
* Track learning progress
* Update profile information

## Instructor Features

* Create and manage courses
* Upload course content and videos
* Edit and delete courses
* View enrolled students
* Manage instructor dashboard

## Authentication & Security

* JWT Authentication
* Password hashing using bcrypt
* Protected routes
* OTP verification system

## Additional Features

* Responsive UI
* Cloud media upload support
* REST API architecture
* MongoDB database integration

---

# Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Redux Toolkit
* React Router DOM
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

## Other Tools

* Cloudinary
* Nodemailer
* dotenv

---

# Folder Structure

```bash
StudyNotion/
│
├── client/                 # Frontend application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Backend application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/chinmay21/studynotion.git
cd studynotion
```

---

# Backend Setup

```bash
cd server
npm install
```

## Create a `.env` File

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAIL_HOST=your_mail_host
MAIL_USER=your_mail_user
MAIL_PASS=your_mail_password
```

## Run Backend Server

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm start
```

---

# API Endpoints

## Authentication Routes

| Method | Endpoint                   | Description    |
| ------ | -------------------------- | -------------- |
| POST   | `/api/auth/signup`         | Register user  |
| POST   | `/api/auth/login`          | Login user     |
| POST   | `/api/auth/sendotp`        | Send OTP       |
| POST   | `/api/auth/reset-password` | Reset password |

## Course Routes

| Method | Endpoint                    | Description     |
| ------ | --------------------------- | --------------- |
| GET    | `/api/course/getAllCourses` | Get all courses |
| POST   | `/api/course/createCourse`  | Create course   |
| PUT    | `/api/course/updateCourse`  | Update course   |
| DELETE | `/api/course/deleteCourse`  | Delete course   |


# Future Improvements

* Live classes support
* AI-based course recommendations
* Certificate generation
* Real-time chat system
* Mobile application

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

Developed by Chinmay Dhaundiyal.
