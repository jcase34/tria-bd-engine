# Tria-BD Engine 🚀

A full-stack Business Development (BD) platform designed to track opportunities and manage organizational data. This project features a secure, admin-approved authentication flow and a modern dashboard interface.

## 🏗️ Architecture
This is a **Monorepo** structure:
- **/backend**: Django Ninja API, PostgreSQL (Neon), and JWT Authentication.
- **/frontend**: Next.js 14, shadcn/ui, and Tailwind CSS.

## 🔑 Key Features
- **Email-Based Auth**: Custom User model replacing Django's default username system.
- **Admin-Gatekeeping**: New users are `inactive` by default. Access is granted only after manual approval in the Django Admin panel.
- **Stateless Security**: JWT (JSON Web Tokens) used for secure communication between frontend and backend.
- **Cloud Database**: Powered by Neon (Serverless Postgres) for scalable data storage.

## 🛠️ Local Setup

### 1. Prerequisites
- Python 3.10+
- Node.js 18+
- A Neon.tech account (or local Postgres)

### 2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt