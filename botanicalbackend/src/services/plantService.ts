import { db, Plant } from "../database/models";

export function createPlant(req, res) {

  const name = req.body.name;
  const species = req.body.species;
  const image = req.body.image;
  const dateAcquired = req.body.dateAcquired;
  const lastRepot = req.body.lastRepot;
  const lastFertilize = req.body.lastFertilize;

  console.log(`in createplant with ${name}:${species}:${image}`);
  Plant.create({ name, species, image, dateAcquired, lastRepot, lastFertilize })
    .then(() => {
      console.log("Created single plant");
      res.status(200).json({ message: "Created plant successfully" });
    })
    .catch((err) => {
      console.log('failed to create plant');
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export function getPlants(req, res) {
    console.log(`in getplants`);
    Plant.findAll()
      .then(plants =>
        {
          console.log("Found plants");
          res.status(200).json(plants);
        })
      .catch((err) => {
        console.log('failed to find any plants');
        console.log(err);
        res.status(500).json({ message: err });
      });
  }

