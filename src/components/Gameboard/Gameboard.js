import React from 'react'
import QuestionModal from '../QuestionModal/QuestionModal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Gameboard = props => (
    <div>
        <Row>
        {props.questionList.map( question => {
        return <Col xs={3}>
        <QuestionModal 
            category={question.category} 
            question={question.question} 
            difficulty={question.difficulty} 
            answer={question.answer}
        />
        </Col>})}
        </Row>
    </div>
)

export default Gameboard