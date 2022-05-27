import { journalClient } from "../services/HttpService";

export const Journal = {
    async create(journal) {
      console.log(journal);
      return journalClient.post("/journal/"
        , { entryId: journal.entryId,
            journalId: journal.journalId,
            entryTitle: journal.entryTitle, 
            userId: journal.userId, 
            plantName: journal.plantName, 
            plantId: journal.plantId, 
            content: journal.content,
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
  let res = await journalClient.get("/journals/");

  let data = await res.data;
  console.log(data);
  return data;
}