import { useState } from "react";
import { Journal } from "../../services/JournalService";

const initialJournalState = {
    userId: 0,
    journalTitle: "",
    plantId: 0,
  };

  export function CreateJournal(props) {
    let {
      userId
    } = props;


    const [journal, setJournal] = useState(initialJournalState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJournal({ ...journal, [name]: value });
    };

    const saveJournal = () => {
      journal.userId = props.userId;
      console.log(journal);
        Journal.createNewJournal(journal)
          .then(res => {
            setSubmitted(true);
            setSubmitFailed(false);
            console.log(res.data);
        })
        .catch(e => {
            setSubmitFailed(true);
            console.log("Error creating new journal", e);
        })
    }

    const resetJournal = () => {
        setJournal(initialJournalState);
        setSubmitted(false);
    }

    return (
        <div>
            {submitted ? (
              <>     
                <h4>You submitted successfully!</h4>
                <button type="button" className="btn btn-secondary" onClick={resetJournal}>
                  Reset
                </button>
              </>
            ) : (
              <>   
                {submitFailed && 
                  <h2>There was an issue</h2>
                }
                <CreateJournalForm handleInputChange={handleInputChange} saveJournal={saveJournal} journal={journal}  />
              </>
            )
            }
          </div>
      );
  }

  export const CreateJournalForm = ({ handleInputChange, saveJournal, journal }) => {
    return (
      <><h2>Create New Journal</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Journal Title</label>
          <input
            type="text"
            id="journalTitle"
            required
            value={journal.journalTitle}
            onChange={handleInputChange}
            name="journalTitle"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">PlantId</label>
          <input
            type="number"
            id="plantId"
            required
            value={journal.plantId}
            onChange={handleInputChange}
            name="plantId"
            className="form-control" />
        </div>
  
        <button type="button" className="btn botbutton" onClick={saveJournal}>
          Submit
        </button>
      </form></>
    )
  }
