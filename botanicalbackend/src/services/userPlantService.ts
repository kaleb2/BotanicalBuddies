import { db, UserPlant } from "../database/models";

export function createUserPlant(req, res) {

  const userid = req.body.userid;
  const plantid = req.body.plantid;

  console.log(`in createuserplant`);
  UserPlant.create({userid, plantid})
    .then(() => {
      console.log("Created single user plant");
      res.status(200).json({ message: "Created user plant successfully" });
    })
    .catch((err) => {
      console.log('failed to create user plant');
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export function getUserPlants(req, res) {
    const thisUserId = req.body.userid;

    console.log(`in getuserplants`);
    UserPlant.findAll({
        where: {
          userid : thisUserId
        }
      })
      .then(users =>
        {
          console.log("Found plants for user");
          res.status(200).json(users);
        })
      .catch((err) => {
        console.log('failed to find any plants for user');
        console.log(err);
        res.status(500).json({ message: err });
      });
  }