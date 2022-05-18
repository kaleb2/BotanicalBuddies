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
}

export const User = db.define<UserModelAttrs>('users', {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  hooks: {
    beforeCreate: async (user: UserModelAttrs) => {

      console.log("Hashing user pw: ", user.password);
      user.password = await bcrypt.hash(user.password, 10);
      console.log("Hashed pw: ", user.password);
    },
  },

});
