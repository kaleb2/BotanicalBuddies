import { Sequelize, DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";


const pguser = process.env.PGUSER;
const pghost = process.env.PGHOST;
const pgpass = process.env.PGPASSWORD;
const pgdatabase = process.env.PGDATABASE;
const pgport = process.env.PGPORT;

const connstring = `postgres://${pguser}:${pgpass}@${pghost}:${pgport}/${pgdatabase}`;

export function logConnstring()
{
  console.log(process.env.PGUSER);
  console.log(connstring);
}

export const db = new Sequelize(connstring);

interface UserModelAttrs extends Model {
  email: string,
  password: string,  
  profilepic: string
}

export const User = db.define<UserModelAttrs>('users', {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  profilepic: {
    type: DataTypes.STRING,
  },
}, {
  hooks: {
    beforeCreate: async (user: UserModelAttrs) => {

      console.log("Hashing user pw: ", user.password);
      user.password = await bcrypt.hash(user.password, 10);
      console.log("Hashed pw: ", user.password);
    },
    beforeBulkCreate: async (users: [UserModelAttrs]) => {

      for (let i = 0; i < users.length ; i++) {
        console.log("Hashing user pw: ", users[i].password);
        users[i].password = await bcrypt.hash(users[i].password, 10);
        console.log("Hashed pw: ", users[i].password);
      }
    },
  },

});

/*Plants*/

interface PlantModelAttrs extends Model {
  name: string,
  userId: number,
  species: string,  
  image: string,
  dateAcquired: Date,
  lastRepot: Date,
  lastFertilize: Date
}

export const Plant = db.define<PlantModelAttrs>('plants', {
  name: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  species: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  dateAcquired: {
    type: DataTypes.DATE,
  },
  lastRepot: {
    type: DataTypes.DATE,
  },
  lastFertilize: {
    type: DataTypes.DATE,
  }
});
