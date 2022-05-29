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

      return <div className="col-12 journal">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2 text-center">{journalTitle}</h2>
        <Link to={"/journal/"+journalId}>Read More</Link>
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
                entry => {
                    return <JournalListing
                    {...entry} />
                }
            )}
        </div>
    );
};