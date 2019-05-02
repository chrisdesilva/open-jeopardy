import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SetTotalQuestions = props => (
    <div>
        <h2>Set Total Number of Questions in Game</h2>
        <p>Multiples of 5 Are Recommended - Maximum of 25 Total Questions</p>
        <Form onSubmit={props.setTotal}>
            <Form.Group>
                <Form.Control 
                    type="number" 
                    name="totalQuestions" 
                    min="1" 
                    max="25" 
                    onChange={props.changeTotal} 
                />
            </Form.Group>
        <Button type="submit">Set Total</Button>
        </Form>
    </div>
)

export default SetTotalQuestions