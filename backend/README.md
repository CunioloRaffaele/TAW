# Backend Documentation

## Overview

The backend is composed of two main components:
- A Node.js server running Express
- A Docker container hosting the database

## Docker Database Setup

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine

### Starting the Database Container

To start the database container, run the following command in your terminal:

```bash
docker compose up
```

### Verifying the Container is Running

```bash
docker ps
```
The Postgres server will be running on port 5431 by default.

## Starting the Node.js Server

1. Navigate to the server directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client locally (actually this is done automatically by the easyStart script, but you can run it manually if needed):
```bash
npx prisma generate
```

4. Start the server:
```bash
npm run easyStart
```
or
```bash
npm run debug
```
This will start the server in debug mode with hot reloading enabled.

The Express server will be running on http://localhost:3000 by default.
