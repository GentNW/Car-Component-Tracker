import { DataSource } from 'typeorm';
import { User } from './Entities/User';  // Adjust the path accordingly
import { RefreshToken } from './Entities/RefreshToken'; // Adjust the path accordingly
import dotenv from 'dotenv'

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',  // Adjust if you're using a different database
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, RefreshToken],  // Add your entities here
  synchronize: true,  // Set to false in production to avoid automatic schema sync
  logging: true,
});
