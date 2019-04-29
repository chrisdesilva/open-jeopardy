import React from 'react'

const SetTotalQuestions = props => (
    <div>
        <form onSubmit={props.setTotal}>
        <label>
        Set Total # of Questions:
        <input type="number" name="totalQuestions" min="1" max="25" onChange={props.changeTotal} />
        </label>
        <input 
        type="submit" 
        value="Set Total" 
        />
        </form>
    </div>
)

export default SetTotalQuestions