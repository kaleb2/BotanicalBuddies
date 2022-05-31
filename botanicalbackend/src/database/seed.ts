import "dotenv/config";
import { Sequelize, DataTypes, DATE } from "sequelize";
import { getJSDocDeprecatedTag } from "typescript";
import { db, Plant, User, Journal } from "./models";


const userSeedData = [
  { email: "bingo@bbb.com", password: "bibibi", profilepic: "url" },
  { email: "bango@bbb.com", password: "bababa", profilepic: "url"},
];

const plantSeedData = [
  { name: "fern", userId: 1, species: "fern", image: "http://localhost:8000/botanicalbuddies/fern.jpg", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
  { name: "monstera", userId: 2, species: "monstera", image: "http://localhost:8000/botanicalbuddies/monstera.jpg", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() },
];

const journalSeedData = [
  { journalTitle:"Userr's journal 1", userId: 1, plantId: 1, dateCreated: Date.now()},
  { journalTitle:"Userr's journal 2", userId: 2, plantId: 2, dateCreated: Date.now()}
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
  
  await User.create({ email: "bongo@bbb.com", password: "bobobo", profilepic: "url" })
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
  
    await Plant.create({ name: "Monstera", userId: 1, species: "bobobo", image: "http://localhost:8000/botanicalbuddies/monstera.jpg", dateAcquired: Date.now(), lastRepot: Date.now(), lastFertilize: Date.now() })
      .then(() => {
        console.log("Created single plant");
      })
      .catch((err) => {
        console.log('failed to create seed plant');
        console.log(err);
      });  

      /*Journals*/

    await Journal.sync({ force: true });
    await Journal.bulkCreate(journalSeedData, { validate: true })
    .then(() => {
      console.log('Journals created');
    }).catch((err) => {
      console.log('failed to create seed journals');
      console.log(err);
    });
  
    await Journal.create({ journalTitle: "New journal #3", userId: 1, plantId: 3, dateCreated: Date.now() })
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
