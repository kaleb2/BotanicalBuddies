import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreateJournalEntry } from './components/CreateJournalEntry';
import { Journals } from './components/Journals';
import { JournalEntryPage } from './components/JournalEntryPage';
import { JournalEntry as JournalEntryType} from "./types/StateTypes";
import getInitialState from './initialState';

function App() {

  let [currentEntry, setCurrentEntry] = useState<JournalEntryType | null>(null);

  useEffect(() => {
    let init = async () => {
      try {
        let initialState = await getInitialState();
        setCurrentEntry(initialState.currentEntry);
      } catch (err) {
        console.log(err);
      }
    }
    init();
    console.log("-- App rerenders --");
  });

  let entry = <JournalEntryPage {...currentEntry!} />;
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<ReactDefault />}/>         
            <Route path="login" element={<Login />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="create-journal-entry" element={<CreateJournalEntry />} />
            <Route path="journals" element={<Journals />} />
            <Route path="journal-entry/:id" element={entry} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
