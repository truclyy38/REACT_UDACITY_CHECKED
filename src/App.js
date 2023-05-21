import { Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";
import './App.css';
import Login from './components/Login';
import { useEffect } from 'react';
import { initData } from './actions/initData';
import NavBar from './components/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/shared/ProtectedRoute';
import New from './components/newpolly/New';
import QuestionPol from './components/polly/QuestionPol';
import PageNotFound from './components/error/PageNotFound';
import LeaderBoard from './components/leaderboard/LeaderBoard';


function App({ dispatch }) {
  useEffect(() => {
    dispatch(initData());
  }, [dispatch]);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/leaderboard" element={<ProtectedRoute><LeaderBoard /></ProtectedRoute>} />
        <Route path="/add" element={<ProtectedRoute><New /></ProtectedRoute>} />
        <Route path="/questions/:id" element={<ProtectedRoute><QuestionPol /></ProtectedRoute>} />
        <Route path="/error" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default connect()(App);
