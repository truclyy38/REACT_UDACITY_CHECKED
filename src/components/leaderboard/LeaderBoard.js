import { useSelector } from 'react-redux';
import Image from '../shared/Image';

const LeaderBoard = () => {
  const usersState = useSelector(state => state.users);
  const users = usersState ? Object.values(usersState).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length) : [];
  return (
    <div className=' m-3 p-3'>
      <h5 className='fw-bold'>Leaderboard</h5>
      <table className="table p-3 bg-light table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">USER</th>
            <th scope="col">ANSWERED</th>
            <th scope="col">CREATED</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <Image url={user.avatarURL} w={'60px'} />
                    <span className="fw-bold">{user.name}</span>
                  </td>
                  <td>{Object.keys(user.answers).length}</td>
                  <td>{user.questions.length}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default LeaderBoard;