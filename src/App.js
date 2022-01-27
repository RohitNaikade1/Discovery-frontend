import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
//import Header from './components/Header';
import Admin from "./components/dashboard/Admin";
import User from "./components/dashboard/User";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import UserList from "./components/users/UserList";
import PrivateRouter from "./components/routes/PrivateRouter";
import AddCredentials from "./components/credentials/AddCredentials";
import CredentialsList from "./components/credentials/CredentailsList";
import UserProfile from "./components/profile/UserProfile";
import AdminProfile from "./components/profile/AdminProfile";
import EditCredentials from "./components/credentials/EditCredentials";
import RegistrationList from "./components/registration/RegistrationList";
import AddRegistration from "./components/registration/AddRegistration";
import EditRegistration from "./components/registration/EditRegistration";
import UserCredentialsList from "./components/credentials/UserCredentialsList";
import UserCredentials from "./components/credentials/UserCredentials";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="user" element={<User />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="addregistration" element={<AddRegistration />} />
        <Route path="edituser/:id" element={<EditUser />} />
        <Route path="editcredentials/:id" element={<EditCredentials />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="addcredentials" element={<AddCredentials />} />
        <Route path="credentialslist" element={<CredentialsList />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="adminprofile" element={<AdminProfile />} />
        <Route path="registrationlist" element={<RegistrationList />} />
        <Route path="editregistration/:id" element={<EditRegistration />} />
        <Route path="credslist" element={<UserCredentialsList/>}/>
        <Route path="usercreds" element={<UserCredentials/>}/>
      </Routes>
    </div>
  );
}

export default App;
