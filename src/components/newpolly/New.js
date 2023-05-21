import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewPol } from '../../actions/questions';
import { connect } from 'react-redux';

const New = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const submitNewPol = (e) => {
    e.preventDefault();
    dispatch(addNewPol(firstOption, secondOption));
    navigate("/");
  }

  return (
    <div className='d-flex text-center flex-column p-3'>
      <h2 className="card-text fw-bold">Would you rather</h2>
      <h5 className="card-title text-muted">Create your own poll</h5>
      <form onSubmit={submitNewPol}>
        <div className="input-group mb-3">
          <span className="input-group-text" data-testid="firstOptionLabel">First Option</span>
          <input
            value={firstOption}
            onChange={(e) => setFirstOption(e.target.value)}
            name="firstOption" type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            data-testid="firstOption" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" data-testid="secondOptionLabel">Second Option</span>
          <input
            value={secondOption}
            onChange={(e) => setSecondOption(e.target.value)}
            name="firstOption"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            data-testid="secondOption" />
        </div>
        <div className='d-flex text-center justify-content-center' style={{ width: '100%' }}>
          <button type="submit" className="button login__submit d-flex text-center justify-content-center" style={{ width: '200px' }} disabled={!firstOption || !secondOption}>
            <span className="button__text" data-testid="submit-new" >Submit</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect()(New);