import { Link } from "react-router-dom";
import { CreateJournalEntry } from "./CreateJournalEntry";

export function Journals() {

    return (
        <div className="journal">
            <p>A list of journal entries</p>
            <Link to="/journal-entry">Entry #1</Link>

            <CreateJournalEntry/>
        </div>
    );
};