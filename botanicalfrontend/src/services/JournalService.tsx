import { journalClient } from "../services/HttpService";

export const Journal = {
    async create(journal) {
      return journalClient.post("/journal/"
        , { journalTitle: journal.journalTitle, 
            userId: journal.userId, 
            plantName: journal.plantName, 
            plantId: journal.plantId, 
            content: journal.content,
            dateCreated: journal.dateCreated
         }
      )  
    }
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