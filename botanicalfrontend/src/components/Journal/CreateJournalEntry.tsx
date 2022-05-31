import React, { useState } from "react";
import { getUserIdFromStorage } from "../../services/AuthService";
import { Journal } from "../../services/JournalService";

const initialJournalEntryState = {
    entryId: 0,
    entryTitle: "",
    journalId: 0,
    userId: 0,
    plantName: "",
    plantId: "",
    content: "",
    dateCreated: new Date(),
  };

  export function CreateJournalEntry(props) {
    let {
        journalId
    } = props;

    const [journalEntry, setJournalEntry] = useState(initialJournalEntryState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJournalEntry({ ...journalEntry, [name]: value });
    };

    const saveJournalEntry = () => {
      journalEntry.journalId = journalId;
      journalEntry.userId = getUserIdFromStorage();
      console.log("journalEntry.userId = " + journalEntry.userId);
      console.log("journalEntry.journalId = " + journalEntry.journalId);
        Journal.createEntry(journalEntry)
          .then(res => {
            setSubmitted(true);
            setSubmitFailed(false);
            console.log(res.data);
        })
        .catch(e => {
            setSubmitFailed(true);
            console.log("Error creating new journal entry", e);
        })
    }

    const resetJournalEntry = () => {
        setJournalEntry(initialJournalEntryState);
        setSubmitted(false);
    }

    return (
        <div>
            {submitted ? (
              <>     {/* If we've already submitted, show this piece*/}
                <h4>You submitted successfully!</h4>
                <button type="button" className="btn btn-secondary" onClick={resetJournalEntry}>
                  Reset
                </button>
              </>
            ) : (
              <>   {/* If we've NOT already submitted, show this piece*/}
                {submitFailed && //This will only render if our prior submit failed
                  //we could add a div here and style this separately
                  <h2>There was an issue</h2>
                }
                <CreateJournalEntryForm handleInputChange={handleInputChange} saveJournalEntry={saveJournalEntry} journalEntry={journalEntry}  />
              </>
            )
            }
          </div>
      );
  }

  export const CreateJournalEntryForm = ({ handleInputChange, saveJournalEntry, journalEntry }) => {
    return (
      <>
      <form>
        <div className="mb-3">
          <label htmlFor="entryTitle" className="form-label">Title</label>
          <input
            type="text"
            id="entryTitle"
            required
            value={journalEntry.entryTitle}
            onChange={handleInputChange}
            name="entryTitle"
            className="form-control" />
        </div>
  
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <input
            type="text"
            id="content"
            required
            value={journalEntry.content}
            onChange={handleInputChange}
            name="content"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">Plant Name</label>
          <input
            type="text"
            id="plantName"
            required
            value={journalEntry.plantName}
            onChange={handleInputChange}
            name="plantName"
            className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">Plant Id</label>
          <input
            type="number"
            id="plantId"
            required
            value={journalEntry.plantId}
            onChange={handleInputChange}
            name="plantId"
            className="form-control" />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={saveJournalEntry}>
          Submit
        </button>
      </form></>
    )
  }
