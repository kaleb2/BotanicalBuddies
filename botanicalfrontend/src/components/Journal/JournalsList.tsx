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
import { Journal as JournalType} from "../../types/StateTypes";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export type JournalProps = JournalType & { onUnmatchButtonClick: (id: number) => void }

export function JournalListing(props) {
        let {
            journalId,
            journalTitle,
            userId,
            dateCreated
        } = props;
    

    useEffect(() => {
        console.log(`Journal  ${journalTitle} rerendered`);
      });

      return <div className="journal">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2">{journalTitle}</h2>
        <p>Written by user ID {userId} on {dateCreated}</p>
        <p>Plant: </p>
        <Link to={"/journal/"+journalId}>View Journal</Link>
      </div>
    </div>;

}

export type JournalsListProps = {
    listOfJournals: Array<JournalType>,
  }


export function JournalsList({
    listOfJournals
  }: JournalsListProps) {
    return (
        <div className="row">
            <br/>
            {listOfJournals.map(
                journal => 
                {
                    return <JournalListing
                    {...journal} />
                }
            )}
        </div>
    );
};

export function ProfileJournalsList({
    listOfJournals
  }: JournalsListProps) {
    return (
        <div className="row">
            <br/>
            {listOfJournals.map(
                journal => 
                {
                    if (journal.userId === 1 ) {
                        return <div className="col-3 journal"><JournalListing
                    {...journal} /></div>
                    }
                }
            )}
        </div>
    );
};