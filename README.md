# 🚀 Hono-Powered AI API with Streaming & MongoDB CRUD

## 📌 Overview

Welcome to **Hono-Powered AI API**, a fast and lightweight API built with **Hono**, powered by **Bun**, **MongoDB**, and **Gemini AI**. It supports **streaming responses** and full **CRUD operations** with MongoDB.

---

## 📦 Installation & Setup

### 🛠 Prerequisites

Ensure you have **Bun** installed before proceeding:

```sh
curl -fsSL https://bun.sh/install | bash
```

After installation, restart your terminal and verify:

```sh
bun --version
```

### 🚀 Clone the Repository

```sh
git clone https://github.com/SyedAbdullahAhmed/Hono-Stream-.git
cd Hono-Stream-
```

### 📂 Setup Environment Variables

Create a **.env** file in the root directory and add the following:

```env
GEMINI_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 📦 Install Dependencies

```sh
bun install
```

---

## 🚀 Running the Server

### 🔥 Start the Development Server

```sh
bun run start
```

### 🧪 Run in Watch Mode (Auto-restart on changes)

```sh
bun run dev
```

---

## ⚙️ Features

✅ **Fast & Lightweight** - Uses Hono for super-fast API handling\
✅ **MongoDB CRUD** - Supports Create, Read, Update, Delete operations\
✅ **Streaming API** - Provides real-time responses with Hono's streaming feature\
✅ **AI-Powered** - Uses Gemini AI for generating responses\
✅ **Bun-powered** - Superfast performance with Bun runtime\
✅ **Logger** - An excellent api builtin

---

## 📌 API Endpoints

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| GET    | `/user`                | Get all users            |
| GET    | `/user/:id`            | Get a user by ID         |
| POST   | `/user`                | Create a new user        |
| PUT    | `/user/:id`            | Update a user by ID      |
| DELETE | `/user/:id`            | Delete a user by ID      |
| GET    | `/gemini?prompt=What is AI?` | Stream AI-generated text |

---

## 🔥 Example Streaming Endpoint Usage

Send a GET request to `/gemini?prompt=What is AI?` and receive **real-time streamed AI-generated text**.

```sh
curl -X GET "http://localhost:3000/gemini?prompt=What is AI?`"
```

---

## 🛠 Tech Stack

- **Hono** - Lightweight and fast web framework
- **Bun** - High-performance JavaScript runtime
- **MongoDB** - NoSQL database for data storage
- **Google Gemini AI** - AI-powered text generation
- **TypeScript** - Ensures type safety and better maintainability


---

## 📩 Contact

For any questions or issues, feel free to reach out:
📧 Email: **[your-email@example.com](mailto\:your-email@example.com)**\
🐙 GitHub: [YourGitHub](https://github.com/yourusername)

---

🚀 **Happy Coding!** 🖥️

Trying to be better!

