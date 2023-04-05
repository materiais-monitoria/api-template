import mysql from 'mysql2/promise';
import { db } from './env';

console.log(db);
export const connection = await mysql.createConnection(db);
