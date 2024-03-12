import { useState } from 'react'
import { Todos } from './Components/Todos'
import { type TodoId, Todo as TodoType } from './types'

const mockTODOS = [
  {
    id: 1,
    title: 'todo uno',
    completed: true
  },
  {
    id: 2,
    title: 'todo dos',
    completed: false
  },
  {
    id: 3,
    title: 'todo tres',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTODOS)
  const removeTodo = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed
        }
      }
      return todos
    })
    console.log(newTodos)
    setTodos(newTodos)
  }
  return (
    <>
      <div className='todoapp'>
        <Todos list={todos} removeTodo={removeTodo} onToggleCompletedd={handleCompleted} />
      </div>
    </>
  )
}

export default App
