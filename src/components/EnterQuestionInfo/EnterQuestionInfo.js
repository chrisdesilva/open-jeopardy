import React from 'react'

const EnterQuestionInfo = props => (
    <div>
        <form onSubmit={props.addQuestion}>
        <label>
            Category:
            <select onChange={props.changeCategory}>
            {props.categories.map( category => <option value={category}>{category}</option> )}
            </select>
        </label>
        <label>
            Question: 
            <input 
            type="text" 
            name="question" 
            value={props.questionValue} 
            placeholder="Enter question" 
            onChange={props.changeQuestion}
            />
        </label>
        <label>
            Answer: 
            <input 
            type="text" 
            name="question" 
            value={props.answerValue}
            placeholder="Enter question" 
            onChange={props.changeAnswer}
            />
        </label>
        <label>
            Difficulty: 
            <select onChange={props.changeDifficulty}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Final">Final</option>
            </select>
        </label>
        <input type="submit" value="Add Question" />
        </form> 
        {!props.showTotal && 
        <p>Add {props.totalQuestions}{props.totalQuestions === 1 ? ' question' : ' questions'}</p>
        }
    </div>
)

export default EnterQuestionInfo