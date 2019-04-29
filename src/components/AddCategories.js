import React from 'react'

const AddCategories = props => (
    <div>
        <form onSubmit={props.addCategory}>
            <label>
            Categories: 
            <input 
                type="text" 
                name="category" 
                value={props.value} 
                placeholder="Enter 5 question categories" 
                onChange={props.changeCategory}
            />
            </label>
            <input 
            type="submit" 
            value="Add Category" 
            />
        </form>
    </div>
)

export default AddCategories