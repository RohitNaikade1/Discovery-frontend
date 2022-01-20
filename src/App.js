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
function App() {

  const data={}
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
      
        {/* <Route exact path="/" element={ <Header />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="admin" element={ <Admin />} />
        <Route path="user" element={ <User />} />
        <Route path="adduser" element={ <AddUser />} />
        <Route path="edituser" element={ <EditUser/>} />
        <Route path ="userlist" element={<UserList/>}/>

        
      </Routes>
      
    </div>
  );
}

export default App;
