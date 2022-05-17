import "dotenv/config";
import { Sequelize, DataTypes } from "sequelize";
import { db, User } from "./models";


const userSeedData = [
  { email: "bingo@bbb.com", password: "bibibi" },
  { email: "bango@bbb.com", password: "bababa" },
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
      console.log('failed to create seed users');
      console.log(err);
    })
    .finally(() => {
      db.close();
    });

    console.log("seed finished.");
};

seed();
