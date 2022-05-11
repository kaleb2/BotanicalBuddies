import path from "path";
import { promises as fs } from "fs";
import express from "express";

export default function setupRoutes(app)
{
    // app.use(express.json());

    const router = express.Router();

    // app.use("/api/v1", router);

    app.get("/index", async (req, res) => {
        return getStaticFile(res, "index.html");
    });

    app.use((req, res, next) => {
        return res.status(404).json({
        message: "This page doesn't exist at all!",
        });
    });
}

const filePathPrefix = path.resolve(__dirname, "..", "public");

async function getStaticFile(res, filePath) {
  return fs.readFile(
    path.resolve(filePathPrefix, filePath), "utf8")
    .catch((err) => {
      return res.status(500).send(`Server Error Occurred! ${err}`);
    }).then((file) => {
      res.status(200).send(file);
    });
}