import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthenticationForm } from './pages/Authentication/index.tsx';
import LayoutModule from './pages/Layout/index.tsx';
import Profile from './pages/Profile/index.tsx';
import Activites from './pages/Activities/index.tsx';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AuthenticationForm} />
        <Route path="/layout" Component={LayoutModule} >
          <Route exact path='profile' element={<Profile />}></Route>
          <Route path='activities' element={<Activites />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;

