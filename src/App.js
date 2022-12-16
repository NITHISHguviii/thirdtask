import logo from './logo.svg';
import './App.css';

import Dashboard from './Dashboard';
import Users from './users';
import Createuser from './createuser';
import Login from './login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portal from './Portal';
import Userview from './userview';
import Edituser from './edituser';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/portal" element={<Portal />}>
    
    <Route path="dashboard" element={<Dashboard />}/>
        <Route path="users" element={<Users />}/>
        <Route path="users/:id" element={<Userview />}/>
        <Route path="user/edit/:id" element={<Edituser />}/>

        
        <Route path="create-user" element={<Createuser />}/>
        </Route>
    </Routes>

   </BrowserRouter>
  );
}

export default App;
