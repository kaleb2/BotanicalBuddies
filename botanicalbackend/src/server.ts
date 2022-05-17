import "dotenv/config";
import express from "express";
import setupRoutes from "./setupRoutes";

async function main()
{
  const app = express();  
  setupRoutes(app);

  const server = await app.listen(9000, () => {
    console.log("Server is running");
  });
}

main();