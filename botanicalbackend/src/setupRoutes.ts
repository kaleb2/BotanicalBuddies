import path from "path";
import cors from "cors";
import { promises as fs } from "fs";
import express from "express";
import { checkDuplicateEmail } from "./middlewares/verifyUser";
import { createUser, getUser, getUsers } from "./services/userService";
import passport from "passport";
import { ConfigurePassportStrategies, generateAccessToken } from "./services/authService";
import authenticateToken  from "./middlewares/authenticateToken";
import Multer from "multer";
import Minio from "minio";
import { UploadFileToMinio } from "./services/minioService";
//import { createUserPlant, getUserPlants } from "./services/userPlantService";
import { createPlant, getPlants, getPlant } from "./services/plantService";
//import { createJournal, getJournal, getJournals, getJournalsForUser } from "./services/JournalService";

export default function setupRoutes(app)
{
    console.log("setupRoutes started.");
    app.use(cors());
    app.use(express.json());

    ConfigurePassportStrategies(app);

    const router = express.Router();

    router.post("/plants", Multer({ storage: Multer.memoryStorage() }).single("file"), createPlant);

    router.get("/plants/:userId", getPlants);

    router.get("/plant/:id", getPlant);
  
    router.post("/users", 
      checkDuplicateEmail, 
      passport.authenticate('signup', { session: false} ),
      (req, res) => {
        res.json({ message: "Signup successful" });
      }, 
    );

    router.get("/users", getUsers);

    router.get("/users/:id", getUser);

    router.post(
      '/login',
      async (req, res, next) => {
        passport.authenticate(
          'login',
          async (err, user, info) => {
            console.log("User from passport is: ", user);
  
            if (user === false) {
              res.status(403).send("User or password was invalid");
              return;
            }
  
            const token = generateAccessToken(user.email);
            console.log("Login success, got token: ", token);
            res.status(200).send(token);
          },
        )(req, res, next);
      },
    );
    
    router.get("/welcome", async (req, res) => {
      console.log("you are being welcomed.");
      return res.status(200).json({ message:"Welcome to Botanical Buddies!"});
    });

    app.use("/api/v1", router);

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