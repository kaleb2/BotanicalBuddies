import path from "path";
import cors from "cors";
import { promises as fs } from "fs";
import express from "express";
import { checkDuplicateEmail } from "./middlewares/verifyUser";
import { createUser } from "./services/userService";
import { ConfigurePassportStrategies } from "./services/authService";

export default function setupRoutes(app)
{
    console.log("setupRoutes started.");
    app.use(cors());
    app.use(express.json());

    //ConfigurePassportStrategies(app);

    const router = express.Router();

    router.post("/users", checkDuplicateEmail, createUser );

    router.get("/welcome", async (req, res) => {
      console.log("you are being welcomed.");
      return res.status(200).json({ message:"Welcome to Botanical Buddies!"});
    });

    app.use("/api/v1", router);
    
    // app.get("/", async (req, res) => {
    //   return getStaticFile(res, "index.html");
    // });

    // app.get("/welcome", async (req, res) => {
    //   console.log("you are being welcomed.");
    //   return res.status(200).json({ message:"Welcome to Botanical Buddies!"});
    // });

    app.use((req, res, next) => {
        return res.status(404).json({
        message: "This page doesn't exist at all!",
        });
    });

    console.log("setupRoutes finished.");
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