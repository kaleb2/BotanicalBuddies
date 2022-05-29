import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreateJournalEntry } from './components/CreateJournalEntry';
import { Journal } from './components/Journal';
import { JournalsList } from './components/JournalsList';
import getInitialState from './initialState';
import { Journal as JournalType} from "./types/StateTypes";
import { JournalEntry as JournalEntryType} from "./types/StateTypes";
import { JournalEntry } from './components/JournalEntry';


function App() {

  let [listOfJournals, setListOfJournals] = useState<Array<JournalType>>([]);

  useEffect(() => {
    let init = async () => {
      try {
        let initialState = await getInitialState();
        setListOfJournals(initialState.listOfJournals);
      } catch (err) {
        console.log(err);
      }
    }
    init();
    console.log("-- App rerenders --");
  });
  
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
            <Route path="journal/:id" element={<Journal />} />
            <Route path="journals" element={<JournalsList listOfJournals={listOfJournals}/> } />
            <Route path="journal-entry/:id" element={<JournalEntry /> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
