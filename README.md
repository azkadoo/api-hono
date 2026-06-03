## Backend with Hono

Implemented and Deployed basic API Backend.

### Implementation (Early)
A structured backend routes using Hono and Prisma/SQLite. Focused on implementing full CRUD operations, handling stateless HTTP requests, and securing data ingestion via Zod validation for a modular API architecture.

### Deployment (Currently)
Set up the deployment with Debian v12 Virtual Machine, configuration with SSH. Installed with NGINX, and activated with PM2.

IP
```
103.55.38.57
```
Port
```
8000
```

### Installation (Local)
1. Clone this repository
2. Run `pnpm install` in the root folder to install all dependencies

### Running the Backend
1. Go to the `be` folder -> `cd be`
2. Run `pnpm install` to install all dependencies
3. Duplicate `.env.example` to `.env` (if present)
4. Run the database migration: `pnpm prisma migrate dev`
5. Start the server: `pnpm dev`