import { CreateJournalEntry } from "./CreateJournalEntry";
import { Journal as JournalType} from "../../types/StateTypes";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export type JournalProps = JournalType & { onUnmatchButtonClick: (id: number) => void }

export function JournalListing(props) {
        let {
            id,
            journalTitle,
            userId,
            plantId,
            createdAt
        } = props;
    

    useEffect(() => {
        console.log(`Journal  ${journalTitle} rerendered`);
      });

      return <div className="journal">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2">{journalTitle}</h2>
        <p>Written by user ID {userId} on {createdAt}</p>
        <p>Plant: {plantId}</p>
        <Link to={"/journal/"+id}>View Journal</Link>
      </div>
    </div>;

}

export type JournalsListProps = {
    listOfJournals: Array<JournalType>,
  }

  export type ProfileJournalsListProps = {
    listOfJournals: Array<JournalType>,
    userId: string
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
    listOfJournals,
    userId
  }: ProfileJournalsListProps) {
    var userIdNum: number = +userId;
    return (
        <div className="row">
            <br/>
            {listOfJournals.map(
                journal => 
                {
                    if (journal.userId === userIdNum) {
                        return <div className="col-3 journal"><JournalListing
                    {...journal} /></div>
                    }
                }
            )}
        </div>
    );
};