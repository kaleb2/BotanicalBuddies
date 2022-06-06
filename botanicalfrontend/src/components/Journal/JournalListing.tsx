import { Journal as JournalType} from "../../types/StateTypes";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function JournalListing(props) {
        let {
            journalId,
            journalTitle,
            dateCreated
        } = props;
    

    useEffect(() => {
        console.log(`Journal  ${journalTitle} rerendered`);
      });

      return <div className="journal">
      <div className="w-64 flex flex-wrap justify-center">
        <h2 className="w-64 ml-2">{journalTitle}</h2>
        <p>{new Date(dateCreated).toLocaleString()}</p>
        <Link className="link" to={"/journal/"+journalId}>View Journal</Link>
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
                {listOfJournals.length > 0 ? listOfJournals.map(
                    journal => 
                    {
                        return <JournalListing
                        {...journal} />
                    }
                ): <p>No journals yet...</p>}
            </div>
    );
};