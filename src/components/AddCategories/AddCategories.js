import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Typing from 'react-typing-animation'


const AddCategories = props => (
    <div>
    <Typing>
      <h2>
        Enter 5 Categories
        <Typing.Delay ms={2000} />
        <Typing.Backspace count={10} />
        <Typing.Delay ms={1000} />
        Topics
        <Typing.Delay ms={2000} />
        <Typing.Backspace count={6} />
        <Typing.Delay ms={1000} />
        Things You'd Like Your Students To Study
      </h2>
    </Typing>    
        <p></p>
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