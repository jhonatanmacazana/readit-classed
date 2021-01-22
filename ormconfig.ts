import accessEnv from "./src/helpers/accessEnv";

export default {
  type: "postgres",
  host: "localhost",
  port: parseInt(accessEnv("POSTGRES_PORT", "7100"), 10),
  username: accessEnv("POSTGRES_USER", ""),
  password: accessEnv("POSTGRES_PASSWORD", ""),
  database: accessEnv("POSTGRES_DB", ""),
  synchronize: true,
  logging: false,
  entities: ["src/db/entities/**/*.ts"],
  migrations: ["src/db/migrations/**/*.ts"],
  subscribers: ["src/db/subscribers/**/*.ts"],
  cli: {
    entitiesDir: "src/db/entities",
    migrationsDir: "src/db/migrations",
    subscribersDir: "src/db/subscribers",
  },
};
