import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SetTotalQuestions = props => (
    <div>
        <h2>Set Total Number of Questions in Game</h2>
        <p>Select <strong>Short</strong> to play with 15 questions. Select <strong>Long</strong> for 25 questions</p>
        <Form onSubmit={props.setTotal}>
            <Form.Group>
                <Form.Control 
                    as="select" 
                    onChange={props.changeTotal} 
                >
                    <option value="15">Short</option>
                    <option value="25">Long</option>
                </Form.Control>
            </Form.Group>
        <Button type="submit">Set Total</Button>
        </Form>
    </div>
)

export default SetTotalQuestions