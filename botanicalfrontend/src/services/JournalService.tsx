import { journalClient } from "../services/HttpService";

export const Journal = {
    async create(journal) {
      return journalClient.post("/journal"
        , { journalTitle: journal.journalTitle, 
            userId: journal.userId, 
            plantName: journal.plantName, 
            plantId: journal.plantId, 
            content: journal.content,
            dateCreated: journal.dateCreated
         }
      )  
    },
}