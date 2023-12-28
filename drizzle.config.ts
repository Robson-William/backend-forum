import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import { POSTGRES_NAME, POSTGRES_PASSWORD, POSTGRES_URL, POSTGRES_USER } from './src/env';

export default {
  schema: './*/*Schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: POSTGRES_URL,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_NAME
  }
} satisfies Config;