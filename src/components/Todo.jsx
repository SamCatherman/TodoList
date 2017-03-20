import React, {Component} from 'react'
import TodoForm from './TodoForm'

class Todo extends Component {
  render(){
    if (this.props.editingTodoId === this.props.todo.id){
      //when we see this console.log, we know that Todo-props are being
      //passed to the TodosContainer, and are set as the TodosContainer-state,
      //and then being passed back as props to the Todo component
      return(
        <TodoForm
          autoFocus={true}
          buttonName="Update Todo!"
          onTodoAction={this.props.onUpdateTodo} />
      )
    }

    return(
      <p data-todos-index={this.props.todo.id}>
        <span onClick={() => this.props.onEditTodo(this.props.todo)}>
          {this.props.todo.body}
        </span>
        <span
          className='deleteButton'
          onClick={() => this.props.onDeleteTodo(this.props.todo)}>
            (x)
        </span>
      </p>
    )
  }
}

export default Todo
