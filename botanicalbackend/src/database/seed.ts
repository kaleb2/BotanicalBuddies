import "dotenv/config";
import { Sequelize, DataTypes, DATE } from "sequelize";
import { getJSDocDeprecatedTag } from "typescript";
import { db, Plant, User, UserPlant } from "./models";


const userSeedData = [
  { email: "bingo@bbb.com", password: "bibibi", profilepic: "url", journal: 1 },
  { email: "bango@bbb.com", password: "bababa", profilepic: "url", journal: 2 },
];

const plantSeedData = [
  { name: "palm tree", species: "palm tree", image: "", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
  { name: "monstera", species: "ficus", image: "", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
];

const userPlantSeedData = [
  { userid: 1, plantid: 1},
  { userid: 2, plantid: 2}
]

const seed = async () => {
  console.log("Beginning seed");

  // force true will drop the table if it already exists
  // such that every time we run seed, we start completely fresh
  await User.sync({ force: true });

  console.log('Tables have synced!');

  await User.bulkCreate(userSeedData, { validate: true })
    .then(() => {
      console.log('Users created');
    }).catch((err) => {
      console.log('failed to create seed users');
      console.log(err);
    });
  
  await User.create({ email: "bongo@bbb.com", password: "bobobo", profilepic: "url", journal: 3 })
    .then(() => {
      console.log("Created single user");
    })
    .catch((err) => {
      console.log('failed to create seed user');
      console.log(err);
    });

    /*Plants*/

    await Plant.sync({ force: true });
    await Plant.bulkCreate(plantSeedData, { validate: true })
    .then(() => {
      console.log('Plants created');
    }).catch((err) => {
      console.log('failed to create seed plants');
      console.log(err);
    });
  
    await Plant.create({ name: "Monstera", species: "bobobo", image: "url", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() })
      .then(() => {
        console.log("Created single plant");
      })
      .catch((err) => {
        console.log('failed to create seed plant');
        console.log(err);
      })
      


      /*User Plants*/

    await UserPlant.sync({ force: true });
    await UserPlant.bulkCreate(userPlantSeedData, { validate: true })
    .then(() => {
      console.log('User Plants created');
    }).catch((err) => {
      console.log('failed to create seed user plants');
      console.log(err);
    });
  
    await UserPlant.create({ userid: 1, plantid: 2 })
      .then(() => {
        console.log("Created single user plant");
      })
      .catch((err) => {
        console.log('failed to create seed user plant');
        console.log(err);
      }).finally(() => {
        db.close();
      });  

    console.log("seed finished.");
};

seed();
