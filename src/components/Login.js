import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../actions/authen';
import "./Login.css";
import NavBar from './NavBar';

const Login = ({ dispatch }) => {
  const { currentUser, users } = useSelector(state => state)
  const [username, setUsername] = useState("sarahedo");
  // const [password, setPassword] = useState("123456");

  if (!!currentUser) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('url');
    return <Navigate to={redirectUrl} />;
  }

  const submit = (e) => {
    e.preventDefault();
    const user = Object.values(users).find((user) => user.id === username);
    return dispatch(login(user));
  };

  return (<>
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={submit}>
            <h3 className='fw-bold' data-testid="employee-title">Employee Poll</h3>
            <div className="login__field">
              <label htmlFor="username">Username</label>
              <select className='custom-select' data-testid="username" onChange={(e) => setUsername(e.target.value)}>
                {
                  Object.values(users).map((x,i) => {
                    return (
                      <option key={x['id']}>{x['id']}</option>
                    )
                  })
                }
              </select>
            </div>
            <button type="submit" data-testid="submit" className="button login__submit justify-content-center" disabled={!username}>
              <span className="button__text " >Submit</span>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  </>)
}

export default connect()(Login);