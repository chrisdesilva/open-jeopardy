import React from 'react'

class GameSetup extends React.Component {

  state = {
    categories: [],
    questionList: [],
    categoryText: '',
    questionText: '',
    answerText: '',
    difficultyText: 'Beginner',
    categoryOption: '',
    totalQuestions: 1,
    showTotalQuestions: false
  }

  // get category info first, then render as options in dropdown to keep questions organized by category
  handleChangeCategory = e => {
    this.setState({ categoryText: e.target.value })
  }

  // once 5 categories have been added, show # of questions input with showTotalQuestions: true
  handleAddCategory = e => {
    const questionLength = this.state.categories.length
    this.setState({ 
      categories: [...this.state.categories, 
      this.state.categoryText], 
      categoryText: '',
      categoryOption: this.state.categories[0]  
    })
    e.preventDefault()
    if(questionLength === 4) {
      this.setState({
        showTotalQuestions: true
      })
    }
  }

  handleSetQuestionTotal = e => {
    e.preventDefault()
    this.setState({
      showTotalQuestions: false
    })
  }

  // handle the question information after categories have been set
  handleChangeAnswer = e => {
    this.setState({ answerText: e.target.value })
  }

  handleChangeQuestion= e => {
    this.setState({ questionText: e.target.value })
  }

  handleChangeDifficultyOption = e => {
    this.setState({ difficultyText: e.target.value })
  }

  handleChangeCategoryOption = e => {
    this.setState({ categoryOption: e.target.value })
  }

  handleChangeTotalQuestions = e => {
    this.setState({ totalQuestions: Number(e.target.value) })
  }

  // update questionList state with object organized by category
  handleAddQuestion = e => {
    e.preventDefault()
    this.setState({ 
      questionList: [
        ...this.state.questionList,
        {
          category: this.state.categoryOption,
          question: this.state.questionText,
          answer: this.state.answerText,
          difficulty: this.state.difficultyText
        }
      ],
      answerText: '',
      questionText: '' 
    })
  }

  render() {
    return (
      <div>
        <div>
          {this.state.categories.length < 5 &&
            <form onSubmit={this.handleAddCategory}>
              <label>
                Categories: 
                <input 
                  type="text" 
                  name="category" 
                  value={this.state.categoryText} 
                  placeholder="Enter 5 question categories" 
                  onChange={this.handleChangeCategory}
                />
              </label>
              <input 
                type="submit" 
                value="Add Category" 
              />
            </form>
          }
        </div>
        {this.state.showTotalQuestions &&
          <div>
            <form onSubmit={this.handleSetQuestionTotal}>
            <label>
              Set Total # of Questions:
              <input type="number" name="totalQuestions" min="1" max="25" onChange={this.handleChangeTotalQuestions} />
            </label>
            <input 
              type="submit" 
              value="Set Total" 
            />
            </form>
          </div>
        }
          {!this.state.showTotalQuestions && this.state.categories.length === 5 && this.state.questionList.length < this.state.totalQuestions &&
            <div>
              <form onSubmit={this.handleAddQuestion}>
                <label>
                  Category:
                  <select onChange={this.handleChangeCategoryOption}>
                    {this.state.categories.map( category => <option value={category}>{category}</option> )}
                  </select>
                </label>
                <label>
                  Question: 
                  <input 
                    type="text" 
                    name="question" 
                    value={this.state.questionText} 
                    placeholder="Enter question" 
                    onChange={this.handleChangeQuestion}
                  />
                </label>
                <label>
                  Answer: 
                  <input 
                    type="text" 
                    name="question" 
                    value={this.state.answerText}
                    placeholder="Enter question" 
                    onChange={this.handleChangeAnswer}
                  />
                </label>
                <label>
                  Difficulty: 
                  <select onChange={this.handleChangeDifficultyOption}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Final">Final</option>
                  </select>
                </label>
                <input type="submit" value="Add Question" />
              </form> 
              {!this.state.showTotalQuestions && 
                <p>Add {this.state.totalQuestions}{this.state.totalQuestions === 1 ? ' question' : ' questions'}</p>
              }
            </div>
          }

      </div>
    )
  }
}

export default GameSetup
