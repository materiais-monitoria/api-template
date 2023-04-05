import { config } from 'dotenv';
config();

export const port = Number(process.env.PORT || 3000);

export const db = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 27017),
  user: process.env.DB_USER || 'test',
  database: process.env.DB_DATABASE || 'test',
  password: process.env.DB_PASSWORD || 'test'
};
