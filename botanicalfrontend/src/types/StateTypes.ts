export type State = {
    listOfJournals: []
  };
  
  export type Plant = {
    id: number,
    name: string,
    userId: string,
    image: string,
  }

  export type JournalEntry = {
    entryId: number,
    journalId: number,
    entryTitle: string,
    userId: number,
    plantName: string,
    plantId: number,
    content: string,
    dateCreated: Date
  }

  export type Journal = {
    journalId: number,
    journalTitle: string,
    userId: number
  }
  
  export type User = {
    userId: number,
    email: string,
    password: string
  }