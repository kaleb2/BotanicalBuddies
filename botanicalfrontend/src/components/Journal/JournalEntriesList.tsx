
import { JournalEntry as JournalEntryType} from "../../types/StateTypes";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function JournalEntryListing(props) {
        let {
            entryId,
            journalId,
            entryTitle,
            dateCreated
        } = props;
    

    useEffect(() => {
        console.log(`Journal Entry ${entryTitle} rerendered`);
      });

      return <div className="col-12 journal-entry">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2">{entryTitle}</h2>
        <p>{new Date(dateCreated).toLocaleString()}</p>
        <Link className="link" to={"/journal-entry/"+journalId+"/"+entryId}>Read More</Link>
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
                {listOfEntries.length > 0 ? listOfEntries.map(
                    entry => {
                            return <JournalEntryListing
                            key={entry.entryTitle}
                            {...entry} />
                        
                    }
                ): <p>No entries yet...</p>}
            </div>
        </div>
    );
};


