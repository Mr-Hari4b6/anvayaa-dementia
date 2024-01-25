import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthenticationForm } from './pages/Authentication';
import LayoutModule from './pages/Layout';
import ActivityDetails from './pages/Activities/ActivityDetails';
import Activities from './pages/Activities';
import ActivitiesList from './pages/Activities/ActivitiesList';
import Profile from './pages/Profile';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AuthenticationForm} />
        <Route path="/layout" Component={LayoutModule} >
          <Route path='profile' element={<Profile />}></Route>
          <Route path='activities' element={<Activities />}>
             <Route path='activitiesList' element={<ActivitiesList />}></Route>
             <Route path='activity/:id' element={<ActivityDetails />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

