import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Gameboard = props => {
    
    const [show, setShow] = useState(false)
    const [answer, setAnswer] = useState(false)
    
    // open and close modal
    const handleClose = () => {
        setShow(false)
    }

    const handleOpen = () => {
        setShow(true)
    }

    //show answer to question
    const handleAnswer = () => {
        setAnswer(true)
    }

    // set color of button to match difficulty level
    let questionButton 

    if(props.difficulty === "Beginner") {
        questionButton = <Button className="questionButton" onClick={handleOpen} variant="success">{props.category}</Button>
    } else if (props.difficulty === "Intermediate") {
        questionButton = <Button className="questionButton" onClick={handleOpen} variant="warning">{props.category}</Button>
    } else if (props.difficulty === "Advanced") {
        questionButton = <Button className="questionButton" onClick={handleOpen} variant="danger">{props.category}</Button>
    } else {
        questionButton = <Button className="questionButton" onClick={handleOpen} variant="outline-danger">{props.category}</Button>
    }

    return (
    <div>
        {questionButton}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.category}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.question}</Modal.Body>
            <Modal.Footer>
            {answer && <p>{props.answer}</p>}
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleAnswer}>
                Show Answer
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Gameboard