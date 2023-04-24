import  { createPool } from 'mysql2/promise';

export const connection = createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'TypeScriptExpress',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


// module.exports = connection;
