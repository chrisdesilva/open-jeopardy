import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const EnterQuestionInfo = props => (
    <div>
        {!props.showTotal && 
        <h2>Add {props.totalQuestions}{props.totalQuestions === 1 ? ' question' : ' questions'}</h2>
        }
        <Form onSubmit={props.addQuestion}>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Category: </Form.Label>
                <Form.Control as="select" onChange={props.changeCategory}>
                {props.categories.map( category => <option value={category}>{category}</option> )}
                </Form.Control>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Question: </Form.Label>
                <Form.Control
                    type="text" 
                    name="question" 
                    value={props.questionValue} 
                    placeholder="Enter question" 
                    onChange={props.changeQuestion}
                    required
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Answer: </Form.Label> 
                <Form.Control
                    type="text" 
                    name="answer" 
                    value={props.answerValue}
                    placeholder="Enter answer" 
                    onChange={props.changeAnswer}
                    required
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Difficulty </Form.Label>
                <Form.Control as="select" onChange={props.changeDifficulty}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Final">Final</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>
        <Button type="submit">Add Question</Button>
        </Form> 
    </div>
)

export default EnterQuestionInfo