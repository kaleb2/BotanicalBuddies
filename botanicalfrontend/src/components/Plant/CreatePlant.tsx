import React, {useState} from "react";
import { httpClient } from "../../services/HttpService";
import DateTimePicker from 'react-datetime-picker';
import '../../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const initialPlantState = {
    name: "",
    userId: "",
    species: "",
    image: "",
    dateAcquired: new Date(),
    lastRepot: new Date(),
    lastFertilize: new Date(),
};

export function CreatePlant(props) {
  let {
    userId
  } = props;

  console.log("user ID prop = "+userId);

  const [selectedFile, setSelectedFile] = useState();
  const [plant, setPlant] = useState(initialPlantState);
  const [submitted, setSubmitted] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPlant({ ...plant, [name]: value });
  };

  const handleDateChange = (date: any, input: any) => {
    //console.log("input = " + input);
    //console.log("date = " + date);
    //console.log(input);
    const newDate = new Date(date.toString());
    //console.log("setting plant date to " + newDate);
    setPlant({ ...plant, [input]: newDate });
  };

  const onFileChange = event => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  const savePlant = (event) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', selectedFile);
    // @ts-ignore
    formData.append('fileName', selectedFile.name);
    formData.append('name', plant.name);
    formData.append('species', plant.species);
    formData.append('userId', props.userId);
    formData.append('dateAcquired', plant.dateAcquired.toDateString());
    formData.append('lastRepot', plant.lastRepot.toDateString());
    formData.append('lastFertilize', plant.lastFertilize.toDateString());

    console.log(formData);
    console.log(formData.values);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    httpClient.post("/plants", formData, config)
      .then((response) => {
        console.log("Got response from upload file:", response.status);
        if (response.status === 200) {
          setSubmitted(true);
        } else {
          setSubmitFailed(true);
        }

      });
  };

  const resetPlant = () => {
    setPlant(initialPlantState);
    setSubmitted(false);
  }

  return (
    <div>
        {submitted ? (
          <>     {/* If we've already submitted, show this piece*/}
            <h4>You submitted successfully!</h4>
            <button type="button" className="btn btn-secondary" onClick={resetPlant}>
              Reset
            </button>
          </>
        ) : (
          <>   {/* If we've NOT already submitted, show this piece*/}
            {submitFailed && //This will only render if our prior submit failed
              //we could add a div here and style this separately
              <h2>There was an issue</h2>
            }
            <CreatePlantForm handleInputChange={handleInputChange} savePlant={savePlant} plant={plant} handleDateChange={handleDateChange} onFileChange={onFileChange}/>
          </>
        )
        }
      </div>
  );
};

export const CreatePlantForm = ({ handleInputChange, savePlant, plant, handleDateChange, onFileChange }) => {
    return (
      <>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            required
            value={plant.name}
            onChange={handleInputChange}
            name="name"
            className="form-control" />
        </div>
  
        <div className="mb-3">
          <label htmlFor="species" className="form-label">Species</label>
          <input
            type="text"
            id="species"
            required
            value={plant.species}
            onChange={handleInputChange}
            name="species"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label
            className="label"
            htmlFor="profilepic">Upload a profile picture (jpg/png):
          </label>
          <div>
            <input
              className= "botanicalBuddiesFileUpload"
              type="file"
              id="profilepic"
              name="profilepic"
              accept="image/png, image/jpeg"
              onChange={onFileChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="dateAcquired" className="form-label">Date Acquired</label>
          <DateTimePicker 
            id="dateAcquired" 
            required 
            onChange={(e) => 
                {handleDateChange(e, "dateAcquired")} 
            }
            value={plant.dateAcquired} 
            name="dateAcquired"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastRepot" className="form-label">Last Repot</label>
          <DateTimePicker 
            id="lastRepot" 
            required 
            onChange={(e) => 
                {handleDateChange(e, "lastRepot")} 
            }
            value={plant.lastRepot} 
            name="lastRepot"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastFertilize" className="form-label">Last Fertilize</label>
          <DateTimePicker 
            id="lastFertilize" 
            required 
            onChange={(e) => 
                {handleDateChange(e, "lastFertilize")} 
            }
            value={plant.lastFertilize} 
            name="lastFertilize"
            className="form-control" />
        </div>
  
        <button type="button" className="btn botbutton" onClick={savePlant}>
          Create
        </button>
      </form></>
    )
  }