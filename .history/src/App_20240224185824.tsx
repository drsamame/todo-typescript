import { useState } from 'react'
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
  const [todos, setTodos] = useState(mockTODOS)
  return (
    <>
      <div className='todoapp'>
        <Todos list={todos} />
      </div>
    </>
  )
}

export default App