import { httpClient, journalClient } from "../services/HttpService";

export const Journal = {
    async createEntry(journalEntry) {
      console.log(journalEntry);
      return journalClient.post("/journal/"
        , { entryId: journalEntry.entryId,
            journalId: journalEntry.journalId,
            entryTitle: journalEntry.entryTitle, 
            userId: journalEntry.userId, 
            plantName: journalEntry.plantName, 
            plantId: journalEntry.plantId, 
            content: journalEntry.content,
            dateCreated: journalEntry.dateCreated
         }
      )  
    },
    async createNewJournal(journal) {
      console.log(journal);
      return journalClient.post("/journals/"
        , { journalId: journal.journalId,
            userId: journal.userId, 
            dateCreated: journal.dateCreated
         }
      )  
    }
}

export async function getAllJournalEntries() {
  let res = await journalClient.get("/journal/");
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
  let res = await journalClient.get("/journal/"+journalId+"/"+entryId+"/");

  let data = await res.data;
  console.log(data);
  return data;
}

export async function getJournals() {
  let res = await httpClient.get("/journal");

  let data = await res.data;
  console.log(data);
  return data;
}