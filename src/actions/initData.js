import { _getQuestions, _getUsers } from '../_DATA';
import { getQuestions } from './questions';
import { getUsers } from './users';

export function initData() {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}