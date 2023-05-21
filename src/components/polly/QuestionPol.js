import { connect, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { addAnswer } from '../../actions/questions';
import Image from '../shared/Image';
import Box from './Box';

const QuestionPol = ({ dispatch }) => {
  const { currentUser, questions, users } = useSelector(state => state);
  const currentIdQuestion = useParams().id;
  const question = Object.values(questions).find((question) => question.id === currentIdQuestion);
  const author = Object.values(users).find((user) => user.id === question?.author);
  const OPTIONS = [0, 1];

  if (!currentUser || !question || !author) {
    return <Navigate to="/error" />;
  }

  const optionOneVoted = () => {
    return !!question.optionOne.votes.includes(currentUser.id)
  }

  const optionTwoVoted = () => {
    return !!question.optionTwo.votes.includes(currentUser.id)
  }

  const percentageVote = (option) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return question.optionOne.votes.length / totalVotes * 100 + " %";
      case "optionTwo":
        return question.optionTwo.votes.length / totalVotes * 100 + " %";
      default:
        return "";
    }
  };

  const answer = (e) => {
    e.preventDefault();
    if (e.target.value === '0') {
      dispatch(addAnswer(question.id, "optionOne"));
    } else {
      dispatch(addAnswer(question.id, "optionTwo"));
    }
  }

  return (<div>
    <div className='author-infor d-flex text-center flex-column p-5'>
      <h5 className='fw-bold'>Poll By : {author.id}</h5>
      <div>
        <Image url={author.avatarURL} w={'60px'} />
      </div>
      <div className='fw-bold'>Would you rather?</div>
    </div>
    <div className='question-options d-flex flex-row justify-space-between'>
      {
        OPTIONS.map((option) => (<Box key={option}
          question={option === 0 ? question.optionOne.text : question.optionTwo.text}
          option = {option}
          voted={option === 0 ? optionOneVoted() : optionTwoVoted()}
          showClick={!optionOneVoted() && !optionTwoVoted()}
          numberOfVote={option === 0 ? question.optionOne.votes.length : question.optionTwo.votes.length}
          percentage={option === 0 ? percentageVote("optionOne") : percentageVote("optionTwo")}
          clickAnswer={(e) => answer(e)}
        ></Box>))
      }
    </div>
  </div >)
}

export default connect()(QuestionPol);