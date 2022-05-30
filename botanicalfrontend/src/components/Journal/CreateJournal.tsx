import React, { useState } from "react";
import { Journal } from "../../services/JournalService";

const initialJournalState = {
    journalId: 0,
    userId: "",
    dateCreated: new Date(),
  };

  export function CreateJournal(userId) {
    console.log("userid: " + userId);

    const [journal, setJournal] = useState(initialJournalState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJournal({ ...journal, [name]: value });
    };

    const saveJournal = () => {
      console.log(journal);
        journal.dateCreated = new Date(Date.now());
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
              <>     {/* If we've already submitted, show this piece*/}
                <h4>You submitted successfully!</h4>
                <button type="button" className="btn btn-secondary" onClick={resetJournal}>
                  Reset
                </button>
              </>
            ) : (
              <>   {/* If we've NOT already submitted, show this piece*/}
                {submitFailed && //This will only render if our prior submit failed
                  //we could add a div here and style this separately
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
          <label htmlFor="content" className="form-label">JournalId</label>
          <input
            type="number"
            id="journalId"
            required
            value={journal.journalId}
            onChange={handleInputChange}
            name="journalId"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">UserId</label>
          <input
            type="number"
            id="userId"
            required
            value={journal.userId}
            onChange={handleInputChange}
            name="userId"
            className="form-control" />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={saveJournal}>
          Submit
        </button>
      </form></>
    )
  }
