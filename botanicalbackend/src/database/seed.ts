import "dotenv/config";
import { Sequelize, DataTypes } from "sequelize";
import { db, Plant, User } from "./models";


const userSeedData = [
  { email: "bingo@bbb.com", password: "bibibi" },
  { email: "bango@bbb.com", password: "bababa" },
];

const plantSeedData = [
  { name: "bingo@bbb.com", species: "bibibi", image: "" },
  { name: "bango@bbb.com", species: "bababa", image: "" },
];

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
  
  await User.create({ email: "bongo@bbb.com", password: "bobobo" })
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
  
    await Plant.create({ name: "Monstera", species: "bobobo", image: "url" })
      .then(() => {
        console.log("Created single plant");
      })
      .catch((err) => {
        console.log('failed to create seed plant');
        console.log(err);
      })
      .finally(() => {
        db.close();
      });

    console.log("seed finished.");
};

seed();
