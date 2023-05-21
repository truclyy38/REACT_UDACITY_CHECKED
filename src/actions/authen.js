import { LOGGED_IN_USER, LOGOUT_USER } from "../components/shared/constant";

export function login(user) {
  return {
    type: LOGGED_IN_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
