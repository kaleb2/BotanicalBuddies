import React, { useState } from "react";
import { Plant } from "../services/PlantService";
import DateTimePicker from 'react-datetime-picker';

const initialPlantState = {
    name: "",
    userId: "",
    species: "",
    image: "",
    dateAcquired: new Date(),
    lastRepot: new Date(),
    lastFertilize: new Date(),
  };
  
  export const CreatePlant = () => {
  
    const [plant, setPlant] = useState(initialPlantState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);
  
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setPlant({ ...plant, [name]: value });
    };

    const handleDateChange = event => {
        const date = new Date(event.toString());
        console.log("setting plant date to " + date);
        setPlant({ ...plant, dateAcquired: date });
    }
  
    const savePlant = () => {
      Plant.create(plant)
        .then(res => {
          setSubmitted(true);
          setSubmitFailed(false);
          console.log(res.data);
        })
        .catch(e => {
          setSubmitFailed(true);
          console.log("Error creating new plant", e);
        })
    }
  
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
            <CreatePlantForm handleInputChange={handleInputChange} savePlant={savePlant} plant={plant} handleDateChange={handleDateChange}/>
          </>
        )
        }
      </div>
    )
  }

export const CreatePlantForm = ({ handleInputChange, savePlant, plant, handleDateChange }) => {
    return (
      <><h2>Create New Plant</h2>
      <form>
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
          <label htmlFor="userId" className="form-label">User ID</label>
          <input
            type="number"
            id="userId"
            required
            value={plant.userId}
            onChange={handleInputChange}
            name="userId"
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
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="text"
            id="image"
            required
            value={plant.image}
            onChange={handleInputChange}
            name="image"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="dateAcquired" className="form-label">Date Acquired</label>
          <DateTimePicker 
            id="dateAcquired" 
            required 
            onChange={handleDateChange} 
            value={plant.dateAcquired} 
            name="dateAcquired"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastRepot" className="form-label">Last Repot</label>
          <DateTimePicker 
            id="lastRepot" 
            required 
            onChange={handleDateChange} 
            value={plant.lastRepot} 
            name="lastRepot"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="lastFertilize" className="form-label">Last Fertilize</label>
          <DateTimePicker 
            id="lastFertilize" 
            required 
            onChange={handleDateChange} 
            value={plant.lastFertilize} 
            name="lastFertilize"
            className="form-control" />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={savePlant}>
          Create
        </button>
      </form></>
    )
  }