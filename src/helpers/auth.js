import jwt_decode from "jwt-decode";
import history from './helpers';

export const isAdmin = () => {
    var token=localStorage.getItem('token')
    var decoded = jwt_decode(token);
    // console.log(decoded);

    if(decoded.role == "admin"){
        return true;
    }else{
        return false;
    }
}
// remove from cookie
export const isUser = () => {
    var token=localStorage.getItem('token')
    var decoded = jwt_decode(token);
    // console.log(decoded);

    if(decoded.role == "user"){
        return true;
    }else{
        return false;
    }
};

// Access user info from localstorage
export const isAuth = () => {

    var token=localStorage.getItem('token')
    // console.log(token)
    if (token !== null ) {
        return true;
    }else{
        return false;
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    history.push('/');
    window.location.reload(false);
};

