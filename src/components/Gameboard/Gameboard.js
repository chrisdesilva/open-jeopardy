import React from 'react'
import QuestionModal from '../QuestionModal/QuestionModal'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Gameboard = props => (
    <div>      
      <div className="buttonKey">
        <Row>
          <Col xs={12}>
            <h2>Category Key</h2>
          </Col>          
          <Col xs={3}>
              <Button variant="success">Beginner</Button>
              <p>Beginner questions are worth 1 point</p>
          </Col>
          <Col xs={3}>
            <Button variant="warning">Intermediate</Button>
            <p>Intermediate questions are worth 2 points</p>
          </Col>
          <Col xs={3}>
            <Button variant="danger">Advanced</Button>
            <p>Advanced questions are worth 3 points</p>
          </Col>
          <Col xs={3}>
            <Button variant="outline-danger">Final</Button>
            <p>The Final Question is saved for the end. You may wager anything between 0 and your total number of points.</p>
          </Col>
        </Row>
      </div>
        <Row>
        {props.questionList.map( question => {
        return <Col className="w-20">
        {question.difficulty !== "Final" && <QuestionModal 
            category={question.category} 
            question={question.question} 
            difficulty={question.difficulty} 
            answer={question.answer}
        />}
        </Col>})}
        </Row>
        <Row>
        {props.questionList.map( question => {
        return <Col xs={12}>
        {question.difficulty === "Final" && <QuestionModal 
            category={question.category} 
            question={question.question} 
            difficulty={question.difficulty} 
            answer={question.answer}
        />}
        </Col>})}
        </Row>
    </div>
)

export default Gameboard