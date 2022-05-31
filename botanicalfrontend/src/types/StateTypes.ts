export type State = {
    currentProfile: Plant,
    listOfPlants: [],
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
    userId: number,
    plantId: number,
    createdAt: Date
  }
  
  export type User = {
    userId: number,
    email: string,
    password: string
  }