<h1><img src="client/public/notes.svg" alt="Concisio Logo" width="30" style="vertical-align: middle;"/>   Concisio</h1>

Transform YouTube videos and documents into comprehensive, shareable notes with the power of AI.

---

## Features

- **Instant Summaries:** Get concise, accurate summaries of YouTube videos and uploaded files in seconds.
- **Ready-to-Share PDFs:** Download beautifully formatted PDF notes for sharing or studying.
- **Key Point Extraction:** AI highlights the most important information from any video or document.
- **AI-Powered Accuracy:** Advanced algorithms ensure your summaries are clear and reliable.
- **Smart Search:** Quickly find specific information within your notes.
- **Cross-Device Access:** Use NoteTube from any device with a responsive web app.

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)
- **MongoDB** (local or cloud instance)
- API keys for:
  - Google Generative AI (Gemini)
  - OpenAI (if used in your setup)

### Environment Variables

Create a `.env` file in the `server` directory with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_gemini_api_key
PORT=5000
```

For the frontend, create a `.env` file in the `client` directory:

```
VITE_BASE_URL=http://localhost:5000
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/NoteTube.git
cd NoteTube
```

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## Running the App

### Start the backend server

```bash
cd server
npm start
```

The backend will run on `http://localhost:5000` by default.

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:5173` by default (Vite default port).

---

## Usage

1. **Paste a YouTube URL** or **upload a file** (PDF, DOCX, PPTX, TXT).
2. Let the AI analyze and summarize the content.
3. Download save your notes as needed.

---

## Folder Structure

```
NoteTube/
  client/   # React frontend (Vite, TailwindCSS)
  server/   # Express backend (MongoDB, AI services)
```

---

## Author

- [Shobhit](https://www.linkedin.com/in/shobhit-kumar-sharma-17bb4223a/)
