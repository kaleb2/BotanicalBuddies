import { db, Journal } from "../database/models";

export function createJournal(req, res) {
  const journalTitle = req.body.journalTitle;
  const userId = req.body.userId;
  const plantId = req.body.plantId;

  console.log(`in createjournal with ${journalTitle}`);
  Journal.create({ journalTitle, userId, plantId})
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

  export function getJournalsForUser(req, res) {
    const reqUserId = req.params.userId;

    console.log(`in getjournals`);
    Journal.findAll({where: {
        userId : reqUserId
      }
    })
      .then(journals =>
        {
          console.log("Found journals for user id " + reqUserId);
          res.status(200).json(journals);
        })
      .catch((err) => {
        console.log('failed to find any journals for user id ' + reqUserId);
        console.log(err);
        res.status(500).json({ message: err });
      });
  }

  export function getJournal(req, res) {
    const reqUserId = req.params.userId;
    const reqJournalId = req.params.journalId;

    console.log(`in getjournals`);
    Journal.findAll({where: {
        userId : reqUserId,
        id: reqJournalId
      }
    })
      .then(journals =>
        {
          console.log("Found journal id" + reqJournalId + " for user id " + reqUserId);
          res.status(200).json(journals);
        })
      .catch((err) => {
        console.log('failed to find any journals for user id ' + reqUserId + 'and journalId' + reqJournalId);
        console.log(err);
        res.status(500).json({ message: err });
      });
  }
