import { db, Plant } from "../database/models";
import { minioClient } from "./minioService";

const filehost = process.env.MINIO_HOST;
const fileport = process.env.MINIO_PORT;

export const createPlant = async (req, res) => {

  console.log("About to upload file");
  await minioClient.putObject("botanicalbuddies", req.file.originalname, req.file.buffer, (error, etag) => {
    if (error) {
      console.log(error);
      res.send(500);
    } else {
      console.log("Succesfully uploaded file");

    }
  });
  console.log("Done uploading file");

  const name = req.body.name;
  const userId = req.body.userId;
  const species = req.body.species;
  const image = `http://${filehost}:${fileport}/botanicalbuddies/${req.file.originalname}`;
  const dateAcquired = req.body.dateAcquired;
  const lastRepot = req.body.lastRepot;
  const lastFertilize = req.body.lastFertilize;

  console.log(`in createplant with ${name}:${species}:${image}:${userId}:${dateAcquired}:${lastRepot}:${lastFertilize}`);
  Plant.create({ name, userId, species, image, dateAcquired, lastRepot, lastFertilize })
    .then(() => {
      console.log("Created single plant");
      res.status(200).json({ message: "Created profile successfully" });
    })
    .catch((err) => {
      console.log('failed to create plant');
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export function getPlants(req, res) {
    const reqUserId = req.params.userId;

    console.log(`in getplants`);
    Plant.findAll({where: {
        userId : reqUserId
      }
    })
      .then(plants =>
        {
          console.log("Found plants for user id " + reqUserId);
          res.status(200).json(plants);
        })
      .catch((err) => {
        console.log('failed to find any plants for user id ' + reqUserId);
        console.log(err);
        res.status(500).json({ message: err });
      });
  }

  export function getPlant(req, res) {
    const reqPlantId = req.params.id;

    console.log(`in getplants`);
    Plant.findOne({where: {
        id : reqPlantId
      }
    })
      .then(plant =>
        {
          console.log("Found plant for id " + reqPlantId);
          res.status(200).json(plant);
        })
      .catch((err) => {
        console.log('failed to find any plants for id ' + reqPlantId);
        console.log(err);
        res.status(500).json({ message: err });
      });
  }

