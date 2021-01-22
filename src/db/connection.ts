import { Connection, createConnection } from "typeorm";

let connection: Connection;

export const initConnection = async () => {
  connection = await createConnection();
  console.log("Database connected");
};

const getConnection = () => connection;

export default getConnection;
