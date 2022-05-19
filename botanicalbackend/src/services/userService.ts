import { db, User } from "../database/models";

export function createUser(req, res) {

  const email = req.body.email;
  const password = req.body.password;
  const profilepic = req.body.profilepic;
  const journal = req.body.journal;

  console.log(`in createuser with ${email}:${password}`);
  User.create({ email, password, profilepic, journal })
    .then(() => {
      console.log("Created single user");
      res.status(200).json({ message: "Created user successfully" });
    })
    .catch((err) => {
      console.log('failed to create users');
      console.log(err);
      res.status(500).json({ message: err });
    });
}


export function getUsers(req, res) {
  console.log(`in getusers`);
  User.findAll()
    .then(users =>
      {
        console.log("Found users");
        res.status(200).json(users);
      })
    .catch((err) => {
      console.log('failed to find any users');
      console.log(err);
      res.status(500).json({ message: err });
    });
}