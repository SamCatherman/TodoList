import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get("http://localhost:4000/todos")
    return request
  }
  static create(todo){
    let request = axios.post("http://localhost:4000/todos", todo)
    return request
  }
}

export default TodoModel
