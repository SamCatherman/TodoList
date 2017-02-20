import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    super()
    //sets initial state via constructor
    this.state = {
      todo: ''
    }
  }
  onInputChange(event){
    this.setState({
      todo: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let todo = this.state.todo
    this.props.createTodo(todo)
    this.setState({
      todo: ''
    })
  }
  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create a new task</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            placeholder='Write your new task here...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Task!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
