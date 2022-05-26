import React, { useState } from "react";
import { Journal } from "../services/JournalService";

const initialJournalState = {
    journalTitle: "",
    userId: "",
    plantName: "",
    plantId: "",
    content: "",
    dateCreated: new Date(),
  };

  export const CreateJournalEntry = () => {
    const [journal, setJournal] = useState(initialJournalState);
    const [submitted, setSubmitted] = useState(false);
    const [submitFailed, setSubmitFailed] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setJournal({ ...journal, [name]: value });
    };

    const saveJournal = () => {
        Journal.create(journal)
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
                <CreateJournalEntryForm handleInputChange={handleInputChange} saveJournal={saveJournal} journal={journal} />
              </>
            )
            }
          </div>
      );
  }

  export const CreateJournalEntryForm = ({ handleInputChange, saveJournal, journal }) => {
    return (
      <><h2>Create New Journal Entry</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            required
            value={journal.journalTitle}
            onChange={handleInputChange}
            name="title"
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
  
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <input
            type="text"
            id="content"
            required
            value={journal.content}
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
            value={journal.plantName}
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
            value={journal.plantId}
            onChange={handleInputChange}
            name="plantId"
            className="form-control" />
        </div>
  
        <button type="button" className="btn btn-primary" onClick={saveJournal}>
          Submit
        </button>
      </form></>
    )
  }
