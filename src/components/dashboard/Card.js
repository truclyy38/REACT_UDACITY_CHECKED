import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../shared/Image';
import './Card.css';

const Card = ({ question }) => {
  const users = useSelector(state => state.users);
  const author = users[question.author];
  return (
    <div className="card m-2 hover-effect" style={{ width: '18rem' }}>
      <Link to={'questions/' + question.id} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="card-body">
          <Image url={author.avatarURL} w={'60px'} />
          <h5 className="card-title text-muted">{question.author}</h5>
          <p className="card-text">{new Date(question.timestamp).toDateString()}</p>
          <p className="text-decoration-underline">Show</p>
        </div>
      </Link>
    </div>
  )
}

export default connect()(Card);