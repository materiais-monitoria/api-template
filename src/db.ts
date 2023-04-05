import mysql from 'mysql2/promise';
import { db } from './dotenv';

export const connection = await mysql.createConnection(db);
