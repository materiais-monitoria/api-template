export default {
  port: Number(process.env.PORT || 3000)
};

export const db = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 27017),
  username: process.env.DB_USERNAME || 'test',
  database: process.env.DB_DATABASE || 'test',
  password: process.env.DB_PASSWORD || 'test'
};
