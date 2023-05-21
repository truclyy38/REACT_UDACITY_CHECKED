import { useSelector } from 'react-redux';
import Section from './Section';
import { useState } from 'react';

const Dashboard = () => {
  const [boardState, setBoardState] = useState(0);
  const { questions, currentUser } = useSelector(state => state);
  const questionsSorted = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  const currentUserId = currentUser.id;
  const newQuestions = questionsSorted.filter(question => !question.optionOne.votes.includes(currentUserId) && !question.optionTwo.votes.includes(currentUserId));
  const doneQuestions = questionsSorted.filter(question => question.optionOne.votes.includes(currentUserId) || question.optionTwo.votes.includes(currentUserId));
  const sections = ['New Questions', 'Done']
  return (
    <div className='bg-white text-center pb-5'>{
      boardState === 0 ?
        (<div >
          <Section section={sections[0]} questions={newQuestions} />
          <button className='btn btn-outline-primary' onClick={() => setBoardState(1)}>View Done Questions Tag</button>
        </div>) :
        (<div>
          <Section section={sections[1]} questions={doneQuestions} />
          <button className='btn btn-outline-primary' onClick={() => setBoardState(0)}>View New Questions Tag</button>
        </div>)
    }</div>
  )
}

export default Dashboard;