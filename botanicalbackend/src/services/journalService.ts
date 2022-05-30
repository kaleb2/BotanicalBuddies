import { db, Journal } from "../database/models";

export function createJournal(req, res) {

  const journalId = req.body.journalId;
  const journalTitle = req.body.journalTitle;
  const userId = req.body.userId;
  const dateCreated = req.body.dateCreated;

  console.log(`in createjournal with ${journalTitle}:${userId}:${journalId}`);
  Journal.create({ journalId, journalTitle, userId, dateCreated })
    .then(() => {
      console.log("Created single journal");
      res.status(200).json({ message: "Created journal successfully" });
    })
    .catch((err) => {
      console.log('failed to create journal');
      console.log(err);
      res.status(500).json({ message: err });
    });
}

export function getJournals(req, res) {
    console.log(`in getjournals`);
    Journal.findAll()
      .then(journals =>
        {
          console.log("Found journals");
          res.status(200).json(journals);
        })
      .catch((err) => {
        console.log('failed to find any journals');
        console.log(err);
        res.status(500).json({ message: err });
      });
  }

