import { journalClient } from "../services/HttpService";

export const Journal = {
    async createEntry(journalEntry) {
      console.log(journalEntry);
      return journalClient.post("/journalentry/"
        , { journalId: journalEntry.journalId,
            entryTitle: journalEntry.entryTitle, 
            userId: journalEntry.userId, 
            plantName: journalEntry.plantName, 
            plantId: journalEntry.plantId, 
            content: journalEntry.content
         }
      )  
    },
    async createNewJournal(journal) {
      console.log(journal);
      return journalClient.post("/journal/"
        , { userId: journal.userId, 
            journalTitle: journal.journalTitle,
            plantId: journal.plantId
         }
      )  
    }
}

export async function getAllJournalEntries() {
  let res = await journalClient.get("/journalentry/");
  let data = await res.data;
  console.log(data);
  return data;
}

export async function getJournalEntries(journalId) {
  let res = await journalClient.get("/journal/"+journalId+"/");

  let data = await res.data;
  console.log(data);
  return data;
}

export async function getJournalEntry(journalId, entryId) {
  console.log("in get journal entry");
  let res = await journalClient.get("/journal/"+journalId+"/"+entryId+"/");
  let data = await res.data;
  console.log(data);
  return data;
}

export async function getJournals() {
  console.log("in get all journals");
  let res = await journalClient.get("/journal");

  let data = await res.data;
  console.log(data);
  return data;
  
}

export async function getJournalsForUser(userId) {
  let res = await journalClient.get("/journals/"+userId);

  let data = await res.data;
  console.log(data);
  return data;
}

export async function getJournal(journalId) {
  console.log("in get journal");
  let res = await journalClient.get("/journal/"+journalId);

  let data = await res.data;
  console.log(data);
  return data;
}