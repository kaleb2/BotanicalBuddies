import { CreatePlant } from "./CreatePlant";
import { PlantsList } from "./PlantsList";

export function UserProfile() {

    return (
        <div className="profile">
            <p>This is your profile!</p>

            <div className="plantsList">
            <h2>Your plants:</h2>
                <PlantsList/>
            </div>

            <CreatePlant/>
        </div>
    );
};