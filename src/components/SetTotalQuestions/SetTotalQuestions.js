import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SetTotalQuestions = props => (
    <div>
        <h2>Set Total Number of Questions</h2>
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