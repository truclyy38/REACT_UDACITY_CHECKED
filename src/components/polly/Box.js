const Box = ({ question, voted, showClick = false, numberOfVote = 0, percentage = '0%', option, clickAnswer }) => {
  const greenBg = voted ? 'bg-success text-white' : '';
  return (
    <div className={`card p-2 m-2 ${greenBg}`} style={{ width: "50%" }}>
      <div className="card-body">
        {question}
        {
          !showClick && <p className="fs-sm">Votes: {numberOfVote} ({percentage})</p>
        }
      </div>
      {
        showClick &&
        <button disabled={voted === true} className='btn btn-outline-success' value={option} onClick={clickAnswer}>Click</button>
      }
    </div>
  )
}

export default Box;