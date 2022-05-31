import './App.css';
import { CreateUser } from './components/CreateUser';
import { ReactDefault, NotFound, Header} from './components/React';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { UserProfile } from './components/UserProfile';
import { CreatePlant } from './components/Plant/CreatePlant';
import { PlantPage } from './components/Plant/PlantPage';
import { CreateJournalEntry } from './components/Journal/CreateJournalEntry';
import { AllJournals } from './components/Journal/AllJournals';
import { JournalEntry } from './components/Journal/JournalEntry';
import { Journal } from './components/Journal/Journal';

const userId = 1;

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<ReactDefault />}/>         
            <Route path="login" element={<Login />} />
            <Route path="user-profile/:id" element={<UserProfile />} />
            <Route path="plants/:id" element={<PlantPage />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="create-plant" element={<CreatePlant userId={userId}/>} />
            <Route path="create-journal-entry" element={<CreateJournalEntry />} />
            <Route path="journals/" element={<AllJournals />} />
            <Route path="journal/:id" element={<Journal />} />
            <Route path="journal-entry/:journalId/:id" element={<JournalEntry /> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
