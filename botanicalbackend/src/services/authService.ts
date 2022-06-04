import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { db, User } from "../database/models";
import jwt from "jsonwebtoken";


export function ConfigurePassportStrategies(app) {
  app.use(passport.initialize());

  console.log("configuring passport strategies!");

  passport.use(
    'signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        console.log("In pp middleware");
        try {
          let name = email.substr(0, email.indexOf('@'));
          const user = await User.create({ email, name, password });
          console.log("Created successfully");
          return done(null, user);
        } catch (error) {
          console.log("Not created successfully");
          done(error);
        }
      },
    ),
  );

  passport.use(
    'login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: {
              email,
            },
          });

          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
          
          const validate = await ValidatePassword(email, password);

          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }

          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      },
    ),
  );
}

const ValidatePassword = async (email, password) => { 
	console.log("Validating Password");
  
  let user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) {

    let hashedPW = await bcrypt.compare(password, user.getDataValue('password'));

    console.log("Hashed compare is: ", hashedPW);

    if (hashedPW) {
      console.log("PWs matched");
      return true;
    }

    console.log("PWs didn't match");
    return false;
  }
  console.log("User not found");
  return false;

};

export function generateAccessToken(username) {
  console.log("Username: ", username);
  return jwt.sign(
    { id: username },
    process.env.TOKEN_SECRET,
    { expiresIn: '1800s' },
  );
}