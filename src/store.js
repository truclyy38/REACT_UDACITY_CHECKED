import {configureStore} from '@reduxjs/toolkit';
import currentUser from "./reducers/authen";
import users from "./reducers/users";
import questions from "./reducers/questions";

export const store = configureStore({
  reducer: {
    currentUser,
    users,
    questions,
  },
});
