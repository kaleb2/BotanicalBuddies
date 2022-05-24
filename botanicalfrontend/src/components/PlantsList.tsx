
import { WelcomeButton } from "./WelcomeButton";
import logo from '../logo.svg';
import { Plant as PlantType} from "../types/StateTypes";
import { useEffect, useMemo } from "react";
import { Plant } from "../services/PlantService";

export type PlantProfileProps = PlantType & { onUnmatchButtonClick: (id: number) => void }

export function PlantProfile(props) {
        let {
            name,
            image,
        } = props;
    

    useEffect(() => {
        console.log(`Plant List Profile ${name} rerendered`);
      });

      return <div className="mt-5 flex flex-row">
      <div className="rounded-box botanical-img">
        <img src={image} alt=""/>
      </div>
      <div className="w-64 flex flex-wrap justify-center">
        <span className="w-64 ml-2 text-center">{name}</span>
      </div>
    </div>;

}

export type PlantsListProps = {
    listOfPlants: Array<PlantType>,
  }


export function PlantsList({
    listOfPlants
  }: PlantsListProps) {
    

    return (
        <div className="centered">
            <div className="">Plants</div>
            <br/>
            {listOfPlants.map(
                profile =>
                <PlantProfile
                    key={profile.name}
                    {...profile} />
            )}
        </div>
    );
};