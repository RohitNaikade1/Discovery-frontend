import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/AdminHeader';
import Admin from './components/Admin';
import User from './components/User';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={ <Header />} />
        <Route path="admin" element={ <Admin />} />
        <Route path="user" element={ <User />} />
        <Route path="adduser" element={ <AddUser />} />
        <Route path="edituser" element={ <EditUser />} />
        <Route path ="userlist" element={<UserList/>}/>

        <Route path="login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
