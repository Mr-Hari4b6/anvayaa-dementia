import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { AuthenticationForm } from './pages/Authentication/index.tsx';
import LayoutModule from './pages/Layout/index.tsx';
import Profile from './pages/Profile/index.tsx';
import Activites from './pages/Activities/index.tsx';
import './App.css';
import ActivityDetails from './pages/Activities/ActivityDetails/index.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AuthenticationForm} />
        <Route path="/layout" Component={LayoutModule} >
          <Route path='profile' element={<Profile />}></Route>
          <Route path='activities' element={<Activites />}>
             <Route path='activity/:id' element={<ActivityDetails />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

