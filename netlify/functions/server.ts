import serverless from 'serverless-http';
import express from 'express';

// Import your Express app from server/_core/index.ts
// This is a wrapper to make it work with Netlify Functions

const app = express();

// Your routes will be imported here
// For now, this is a placeholder that will be configured

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'GNOSIS AI API is running' });
});

export const handler = serverless(app);

