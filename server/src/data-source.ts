import { DataSource } from 'typeorm';
import { User } from './Entities/User'; 
import { refresh_token } from './Entities/refresh_token';
import dotenv from 'dotenv'
import { Car } from './Entities/Car';
import { Component } from './Entities/Component';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',  // database type
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Car, Component, refresh_token],
  synchronize: true,  // Set to false in production
  logging: true,
});
