import "dotenv/config";
import { Sequelize, DataTypes, DATE } from "sequelize";
import { getJSDocDeprecatedTag } from "typescript";
import { db, Plant, User, Journal } from "./models";


const userSeedData = [
  { email: "bingo@bbb.com", password: "bibibi", profilepic: "url", journal: 1 },
  { email: "bango@bbb.com", password: "bababa", profilepic: "url", journal: 2 },
];

const plantSeedData = [
  { name: "palm tree", species: "palm tree", image: "", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
  { name: "monstera", species: "ficus", image: "", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
];

const journalSeedData = [
  { journalid: 1, journalTitle:"Userr's journal 1", userId: 1, dateCreated: Date.now()},
  { journalid: 2, journalTitle:"Userr's journal 2", userId: 2, dateCreated: Date.now()}
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
      


      /*Journals*/

    await Journal.sync({ force: true });
    await Journal.bulkCreate(journalSeedData, { validate: true })
    .then(() => {
      console.log('Journals created');
    }).catch((err) => {
      console.log('failed to create seed journals');
      console.log(err);
    });
  
    await Journal.create({ journalId: 3, journalTitle: "New journal #3", userId: 1, dateCreated: Date.now() })
      .then(() => {
        console.log("Created single journal");
      })
      .catch((err) => {
        console.log('failed to create seed journal');
        console.log(err);
      }).finally(() => {
        db.close();
      });  

    console.log("seed finished.");
};

seed();
