import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginForm } from './pages/Authentication/Login';
import LayoutModule from './pages/Layout';
import ActivityDetails from './pages/Activities/ActivityDetails';
import Activities from './pages/Activities';
import ActivitiesList from './pages/Activities/ActivitiesList';
import ProfileDetails from './pages/Profile/ProfileDetails';
import Profile from './pages/Profile';
import { RegisterForm } from './pages/Authentication/Register';
import dementiaActivities from './utils/dementiaActivities';

import './App.css';
import Remainders from './pages/Remainders';
import Feedback from './pages/Rating';
import EditProfile from './pages/Profile/EditProfile';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/" replace />;
};

function App() {

  useEffect(() => {
    localStorage.setItem('dementiaActivities', JSON.stringify(dementiaActivities));
  }, [dementiaActivities]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" Component={LoginForm} />
        <Route path="register" Component={RegisterForm} />

        <Route path="/layout"
          element={<ProtectedRoute element={<LayoutModule />} />}
        >
          <Route path='profile' element={<Profile />}>
            <Route path='profileDetails' element={<ProfileDetails />}></Route>
            <Route path='editProfile' element={<EditProfile />}></Route>
          </Route>
          <Route path='remainders' element={<Remainders />}></Route>
          <Route path='activities' element={<Activities />}>
            <Route path='activitiesList' element={<ActivitiesList />}></Route>
            <Route path='activity/:id' element={<ActivityDetails />}></Route>
            <Route path="feedback" Component={Feedback} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

