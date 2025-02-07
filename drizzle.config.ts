import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/schema/index.ts",
  out: "./src/database/migrations"
})