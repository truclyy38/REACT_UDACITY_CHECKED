import { saveQuestion, saveQuestionAnswer } from '../api';
import { addAnswerUser, addQuestionUser } from './users';

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions,
    };
}

function addAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer,
    };
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function addAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { currentUser } = getState();

        return saveQuestionAnswer(currentUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(currentUser.id, questionId, answer));
                dispatch(addAnswerUser(currentUser.id, questionId, answer));
            });
    };
}

export function addNewPol(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { currentUser } = getState();
        const currentUserId = currentUser.id;
        return saveQuestion(firstOption, secondOption, currentUserId)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question.author, question.id))
            })
    };
}