import React, { useEffect } from 'react';
import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreatePlant } from './components/CreatePlant';
import { UserPlant } from './components/UserPlant';

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
            <Route path="plants/:id" element={<UserPlant />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="create-plant" element={<CreatePlant />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
