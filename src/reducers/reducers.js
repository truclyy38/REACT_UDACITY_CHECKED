import {combineReducers} from "@reduxjs/toolkit";
import currentUser from "./authenUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
    currentUser,
    users,
    questions
});
