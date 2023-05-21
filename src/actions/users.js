import { ADD_ANSWER_USER, ADD_QUESTION_USER, GET_USERS } from "../components/shared/constant";

export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}

export function addAnswerUser(currentUserId, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        currentUserId,
        qid,
        answer,
    };
}

export function addQuestionUser(author, id) {
    return {
        type: ADD_QUESTION_USER,
        author,
        qid: id,
    };
}

