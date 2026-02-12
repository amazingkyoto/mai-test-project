# Contact Us Project

This project consists of a Next.js frontend and a Laravel backend, designed to capture contact form submissions.

## Architecture

- **Frontend**: Next.js (App Router), Tailwind CSS.
  - Component-based architecture.
  - Client-side validation + API integration.
- **Backend**: Laravel 12 API.
  - SQLite database for simplicity.
  - Rate limiting (5 req/min).
  - Validation layer.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- PHP (v8.2+)
- Composer


## Quick Start

### 1. Backend
First, set up the Laravel API.

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
php artisan serve
```

The API will run at `http://localhost:8000`.

### 2. Frontend
In a new terminal, start the Next.js app.

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` to see the page.

## Tech Stack
- **Frontend**: Next.js + Tailwind (clean & responsive).
- **Backend**: Laravel API (handles validation & rate limiting).
- **Database**: SQLite (ready to go, no config needed).

## API Endpoint
**POST /api/contacts**
- **Body**: `name`, `email`, `phone`, `message`
- **Response**: JSON success/error

## Notes
- Rate limit is set to 5 requests/minute to prevent spam.
- SQLite, so don't need to set up MySQL locally.