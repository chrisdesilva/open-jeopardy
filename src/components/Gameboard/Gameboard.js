import React from 'react'

const Gameboard = props => (
    <div>
        {props.questionListLength === props.totalQuestions && 
        <div>
            {props.questionList.map( question => {
            return <ul>
                    <li>{question.category},{question.difficulty},{question.question}</li>
                    </ul>
            })}
        </div>
        }
    </div>
)

export default Gameboard