import React, { useEffect } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreateJournalEntry } from './components/CreateJournalEntry';
import { Journals } from './components/Journals';

function App() {

  useEffect(() => {
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
            <Route path="journals" element={<Journals />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
