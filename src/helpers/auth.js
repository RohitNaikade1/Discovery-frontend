import jwt_decode from "jwt-decode";
import history from "./helpers";

export const isAdmin = () => {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  if (decoded.role == "admin") {
    return true;
  } else {
    return false;
  }
};
// remove from cookie
export const isUser = () => {
  var token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  if (decoded.role == "user") {
    return true;
  } else {
    return false;
  }
};

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

// Access user info from localstorage
export const isAuth = () => {
  var token = localStorage.getItem("token");

  const decodedJwt = parseJwt(token);

  if (decodedJwt != null && decodedJwt.exp * 1000 < Date.now()) {
    signout();
  }
  if (token !== null) {
    return true;
  } else {
    return false;
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  history.push("/");
  window.location.reload(false);
};
