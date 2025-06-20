# Backend Documentation

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
