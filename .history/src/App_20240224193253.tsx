import { useState } from 'react'
import { Todos } from './Components/Todos'
import { type TodoId } from '../types'

const mockTODOS = [
  {
    id: 1,
    title: 'todo uno',
    completed: false
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
  const [todos] = useState(mockTODOS)
  const removeTodo = (id: TodoId) => {
    console.log(id)
  }
  return (
    <>
      <div className='todoapp'>
        <Todos list={todos} removeTodo={removeTodo} />
      </div>
    </>
  )
}

export default App
