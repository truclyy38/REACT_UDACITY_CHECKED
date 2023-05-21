import Card from './Card';

const Section = ({ section, questions }) => {
  return (
    <div>
      <div className="card-body">
        <h5 className='fw-bold'>{section}</h5>
        <div className="p-2 m-2">
          <div className="row">
            {
              questions.map(question => <Card className="col" key={question.id} question={question} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section;