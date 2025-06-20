# TAW Project

This repository contains the full stack for the TAW (Tecnologie e Applicazioni Web) project, including:

- **Node.js/Express backend** (with Prisma ORM)
- **Angular frontend**
- **PostgreSQL database**
- **Docker Compose** for easy orchestration

---

## 🚀 Quick Start (with Docker Compose)
To quickly set up the entire application stack using Docker Compose, follow these steps:

   ```sh
   git clone https://github.com/CunioloRaffaele/TAW.git
   cd TAW
   cd deploy
   docker-compose up --build
   docker ps
   ```

## 🧑‍💻 Demo Accounts
- **Admin**: 
```json
{
    "name": "Admin",
    "email": "adminAccount@gmail.com",
    "password": "ciao"
}
```
- **Normal user**: 
```json
{
    "name": "Mario",
    "email": "mario@gmail.com",
    "password": "MarioPassword123"
}
```
- **Enrolled Airline**:
```json
{
    "name": "FlySafe",
    "password": "password123"
}
```
