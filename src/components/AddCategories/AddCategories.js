import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const AddCategories = props => (
    <div>
        <h2>Enter Five Categories</h2>
        <Form onSubmit={props.addCategory}>
            <Form.Group>
                <Form.Control 
                    inline="true" 
                    type="text" 
                    placeholder="Enter Category" 
                    value={props.value} 
                    onChange={props.changeCategory}
                    required
                />
            </Form.Group>
            <Button type="submit">Add Category</Button> 
        </Form>
    </div>
)

export default AddCategories