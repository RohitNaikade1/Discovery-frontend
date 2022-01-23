import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,Switch } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Admin from './components/Admin';
import User from './components/User';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';
import PrivateRouter from './components/PrivateRouter';
import AddCredentials from './components/AddCredentials';
import CredentialsList from './components/CredentailsList';
import  UserProfile  from './components/UserProfile';
import AdminProfile from './components/AdminProfile'
import EditCredentials from './components/EditCredentials';
function App() {

  const data={

  }
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="admin" element={ <Admin />} />
        <Route path="user" element={ <User />} />
        <Route path="adduser" element={ <AddUser />} />
        <Route path="edituser/:id" element={ <EditUser/>} />
        <Route path="editcredentials/:id" element={ <EditCredentials/>} />
        <Route path ="userlist" element={<UserList/>}/>
        <Route path ="addcredentials" element={<AddCredentials/>}/>
        <Route path ="credentialslist" element={<CredentialsList/>}/>
        <Route path ="userprofile" element={<UserProfile />}/>
        <Route path ="adminprofile" element={<AdminProfile />}/>
      </Routes>
      
    </div>
  );
}

export default App;
