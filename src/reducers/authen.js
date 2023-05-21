import { LOGGED_IN_USER, LOGOUT_USER } from "../components/shared/constant";

export default function currentUser(state = null, action) {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}