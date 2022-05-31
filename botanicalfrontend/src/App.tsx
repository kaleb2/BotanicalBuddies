import './App.css';
import { CreateUser } from './components/CreateUser';
import { NotFound} from './components/NotFound';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { AuthProvider } from './services/AuthService';
import { UserProfile } from './components/UserProfile';
import { CreateJournalEntry } from './components/Journal/CreateJournalEntry';
import { AllJournals } from './components/Journal/AllJournals';
import { JournalEntry } from './components/Journal/JournalEntry';
import { Journal } from './components/Journal/Journal';
import { CreatePlant } from './components/Plant/CreatePlant';
import { PlantPage } from './components/Plant/PlantPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header';
import { ForumsPage } from './components/ForumsPage';
import { ThreadPage } from './components/ThreadPage';

function Page() {
  return (
    <div>
      <Header/>
      <br/>
      <Outlet/>
    </div>
  );
}

const userId = 1;

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Page />}>
              <Route path="/" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }/>  
              <Route path="login" element={<Login />} />
              <Route path="user-profile/:id" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }/>
              <Route path="plants/:id" element={
                <ProtectedRoute>
                  <PlantPage />
                </ProtectedRoute>
              }/>
              <Route path="thread/:id" element={<ThreadPage />}/>
              <Route path="create-user" element={<CreateUser />} />
              <Route path="create-plant" element={
                <ProtectedRoute>
                  <CreatePlant />
                </ProtectedRoute>
              }/>
              <Route path="create-journal-entry" element={
                <ProtectedRoute>
                  <CreateJournalEntry />
                </ProtectedRoute>
              }/>
              <Route path="journals/" element={
                <ProtectedRoute>
                  <AllJournals />
                </ProtectedRoute>
              } />
              <Route path="journal/:id" element={
                <ProtectedRoute>
                  <Journal />
                </ProtectedRoute>
              }/>
              <Route path="journal-entry/:journalId/:id" element={
                <ProtectedRoute>
                  <JournalEntry />
                </ProtectedRoute>
              }/>
              <Route path="forums" element={<ForumsPage />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
