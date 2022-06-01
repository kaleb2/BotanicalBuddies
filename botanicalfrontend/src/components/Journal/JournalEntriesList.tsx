/*import { Link } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";

export function Journals() {

    return (
        <div className="journal">
            <p>A list of journal entries</p>
            <Link to="/journal-entry">Entry #1</Link>

            <CreateJournalEntry/>
        </div>
    );
};*/

import { CreateJournalEntry } from "./CreateJournalEntry";
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User as UserType } from "../../types/StateTypes";

const initialUserState = {
    userId: 0
}

export function JournalEntryListing(props) {
        let {
            entryId,
            journalId,
            entryTitle,
            userId,
            plantName,
            plantId,
            content,
            dateCreated
        } = props;
    

    useEffect(() => {
        console.log(`Journal Entry ${entryTitle} rerendered`);
      });

      return <div className="col-12 journal-entry">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2">{entryTitle}</h2>
        <p>{new Date(dateCreated).toLocaleString()}</p>
        <Link to={"/journal-entry/"+journalId+"/"+entryId}>Read More</Link>
      </div>
    </div>;

}

export type JournalEntriesListProps = {
    id: number,
    listOfEntries: Array<JournalEntryType>,
  }


export function JournalEntriesList({
    id,
    listOfEntries
  }: JournalEntriesListProps) {
    return (
        <div className="container">
            <div className="row">
                <br/>
                {listOfEntries.map(
                    entry => {
                        if (entry.journalId === id) {
                            return <JournalEntryListing
                            key={entry.entryTitle}
                            {...entry} />
                        }
                    }
                )}
            </div>
        </div>
    );
};