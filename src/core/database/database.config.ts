import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';
import * as process from 'process';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    urlDatabase: process.env.DATABASE_URL,
  },
  release: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    urlDatabase: process.env.DATABASE_URL,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
    urlDatabase: process.env.DATABASE_URL,
  },
};
