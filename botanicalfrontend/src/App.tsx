import React, { useEffect, useState } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreateJournalEntry } from './components/Journal/CreateJournalEntry';
import { Journal } from './components/Journal/Journal';
import { JournalsList } from './components/Journal/JournalsList';
import getInitialState from './initialState';
import { Journal as JournalType} from "./types/StateTypes";
import { JournalEntry as JournalEntryType} from "./types/StateTypes";
import { JournalEntry } from './components/Journal/JournalEntry';
import { AllJournals } from './components/Journal/AllJournals';


function App() {
  
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
            <Route path="journals/" element={<AllJournals />} />
            <Route path="journal/:id" element={<Journal />} />
            <Route path="journal-entry/:id" element={<JournalEntry /> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
