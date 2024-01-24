// import './App.css';
// import { AuthenticationForm } from './pages/Authentication/index.tsx';
// import Dashboard from './pages/Layout/index.tsx';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard></Dashboard>

//     </div>
//   );
// }

// export default App;


import './App.css';
import Dashboard from './pages/Layout/index.tsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Profile from './pages/Profile/profile.tsx';




function AppRouting() {
 
 const navigation = useNavigate()
 
  
    return (
        <>
        
              

                <Dashboard>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                        </Dashboard >
                       
                   
            
           
 
        </>
    );
}
 
export default AppRouting;
 
