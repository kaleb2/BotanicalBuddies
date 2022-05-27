import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getInitialState from "../initialState";
import { getJournalEntry } from "../services/JournalService";
import { JournalEntry as JournalEntryType} from "../types/StateTypes";

export type EntryProps = {
    entryTitle: string
  }

export function JournalEntryPage(props: EntryProps) {
    let {
        entryTitle
      } = props;

    return (
        <div className="journal-entry">
            <h2>{entryTitle}</h2>
        </div>
    );
};