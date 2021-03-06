import React from 'react'
import AddCategories from '../AddCategories/AddCategories'
import EnterQuestionInfo from '../EnterQuestionInfo/EnterQuestionInfo'
import Gameboard from '../Gameboard/Gameboard'
import Header from '../Header/Header'
import SetTotalQuestions from '../SetTotalQuestions/SetTotalQuestions'

class GameSetup extends React.Component {

  state = {
    categories: [],
    questionList: [],
    categoryText: '',
    questionText: '',
    answerText: '',
    difficultyText: 'Beginner',
    categoryOption: '',
    totalQuestions: 15,
    showTotalQuestions: false
  }

  // get category info first, then render as options in dropdown to keep questions organized by category
  handleChangeCategory = e => {
    e.preventDefault()
    this.setState({ categoryText: e.target.value })
  }

  // once 5 categories have been added, show # of questions input with showTotalQuestions: true
  handleAddCategory = e => {
    e.preventDefault()
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
        <Header />
          {this.state.categories.length < 5 &&
            <AddCategories
              value={this.state.categoryText}
              addCategory={this.handleAddCategory}
              changeCategory={this.handleChangeCategory}
            />
          }
        {this.state.showTotalQuestions &&
          <SetTotalQuestions
            setTotal={this.handleSetQuestionTotal}
            changeTotal={this.handleChangeTotalQuestions}
          />
        }
          {!this.state.showTotalQuestions && this.state.categories.length === 5 && this.state.questionList.length < this.state.totalQuestions + 1 &&
            <EnterQuestionInfo
              categories={this.state.categories}
              addQuestion={this.handleAddQuestion}
              changeCategory={this.handleChangeCategoryOption}
              questionValue={this.state.questionText}
              changeQuestion={this.handleChangeQuestion}
              answerValue={this.state.answerText}
              changeAnswer={this.handleChangeAnswer}
              changeDifficulty={this.handleChangeDifficultyOption}
              showTotal={this.state.showTotalQuestions}
              totalQuestions={this.state.totalQuestions}
              questionList={this.state.questionList.length}
            />
          }
        {this.state.totalQuestions > 0 && this.state.totalQuestions + 1 === this.state.questionList.length &&
          <Gameboard 
            questionList={this.state.questionList}
          />
          
        }
      </div>
    )
  }
}

export default GameSetup