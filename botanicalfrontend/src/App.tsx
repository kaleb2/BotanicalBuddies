import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreatePlant } from './components/CreatePlant';
import { UserPlant } from './components/UserPlant';
import { CreateJournalEntry } from './components/Journal/CreateJournalEntry';
import { AllJournals } from './components/Journal/AllJournals';
import { JournalEntry } from './components/Journal/JournalEntry';
import { Journal } from './components/Journal/Journal';


function App() {
  
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
