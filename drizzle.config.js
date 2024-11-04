import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:vLbwN7BmMdr8@ep-sparkling-moon-a5mb2fv0.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
