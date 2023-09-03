import express, { Express, Request, Response } from "express";
import mysql from "mysql2";
import "dotenv/config";

const port = 3001;
const app = express();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect();

connection.query(
  "SELECT 1 + 1 AS solution",
  function (error, results: any, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  }
);

connection.end();

app.get("/", (req, res) => {
  res.send("Getting better");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
