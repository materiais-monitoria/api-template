import mysql from 'mysql2/promise';
import { db } from './env';

let connection: mysql.Connection;
try {
  connection = await mysql.createConnection(db);
  console.log('Connected to database successfully');
} catch (err) {
  console.error('Error connecting to database\n\n', err);
  process.exit(1);
}

export default connection;
