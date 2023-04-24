import { User } from '../types/User';
import { connection } from '../db/connections';
import { RowDataPacket } from 'mysql2/promise';
// select= RowDataPacket[]
// update= OkPacket
// insert = OkPacket
// delete= ResultSetHeader 
async function findAll(): Promise<User[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Users');
  return rows as User[];
};

