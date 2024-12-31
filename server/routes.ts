import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export function registerRoutes(app: Express): Server {
  // Serve static files from the root directory
  app.use(express.static(path.join(process.cwd())));

  // Serve index.html for the root route
  app.get('/', (_req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  const httpServer = createServer(app);
  return httpServer;
}