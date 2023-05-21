import { ADD_ANSWER_USER, ADD_QUESTION_USER, GET_USERS } from "../components/shared/constant";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_USER:
      return {
        ...state,
        [action.currentUserId]: {
          ...state[action.currentUserId],
          answers: {
            ...state[action.currentUserId].answers,
            [action.qid]: action.answer
          }
        }
      };
    case ADD_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid)
        }
      };
    default:
      return state;
  }
}
