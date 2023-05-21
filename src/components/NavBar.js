import { connect, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions/authen';
import Image from './shared/Image';

const NavBar = ({ dispatch }) => {
  const currentUser = useSelector(state => state.currentUser);
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Employee Poll App</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/leaderboard"} className="nav-link active">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link active">New</Link>
            </li>
          </ul>
          {
            currentUser && 
          <form className="d-flex align-items-center">
            <div className="rounded-circle me-2">
              <Image url={currentUser.avatarURL} w={"50px"} />
              <span
                className="font-medium px-3 py-2 text-slate-700"
                data-testid="user-information">UserId: {currentUser.id}</span>
            </div>
            <button onClick={logout} style={{ height: '50%' }} className="btn btn-outline-success" type="submit">Logout</button>
          </form>
          }
        </div>
      </div>
    </nav>
  </div>)
}

export default connect()(NavBar);