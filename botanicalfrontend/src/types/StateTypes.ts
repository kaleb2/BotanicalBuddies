export type State = {
    currentProfile: Plant,
    listOfPlants: [],
  };
  
  export type Plant = {
    id: number,
    name: string,
    userId: string,
    image: string,
  }
  