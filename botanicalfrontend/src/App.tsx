import './App.css';
import { CreateUser } from './components/CreateUser';
import { NotFound} from './components/NotFound';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { AuthProvider, getUserIdFromStorage } from './services/AuthService';
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

function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Page />}>
              <Route path="/" element={
                <ProtectedRoute>
                  <UserProfile id={getUserIdFromStorage()}/>
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
                  <CreatePlant userId={getUserIdFromStorage()}/>
                </ProtectedRoute>
              }/>
              <Route path="create-journal-entry" element={
                <ProtectedRoute>
                  <CreateJournalEntry userId={getUserIdFromStorage()}/>
                </ProtectedRoute>
              }/>
              <Route path="journals/" element={
                  <AllJournals />
              } />
              <Route path="journal/:id" element={
                  <Journal />
              }/>
              <Route path="journal-entry/:journalId/:id" element={
                  <JournalEntry />
              }/>
              <Route path="forums" element={
                <ProtectedRoute>
                  <ForumsPage />
                </ProtectedRoute>
              }/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
