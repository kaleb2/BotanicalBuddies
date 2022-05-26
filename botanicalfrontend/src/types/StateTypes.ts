export type State = {
    currentEntry: JournalEntry,
    listOfEntries: []
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
  