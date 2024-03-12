import { useState } from 'react'
import { Todos } from './Components/Todos'
import { Footer } from './Components/Footer'
import { type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'

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
  const [FilterSelected, setFilterSelected] = useState(TODO_FILTERS[ALL])
  const removeTodo = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => todo.completed).length

  const handleFilterChange = () => {
    setFilterSelected
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        return {
          id: el.id,
          title: el.title,
          completed
        }
      }
      return el
    })
    setTodos(newTodos)
  }
  return (
    <>
      <div className='todoapp'>
        <Todos
          list={todos}
          removeTodo={removeTodo}
          onToggleCompleteTodo={handleCompleted}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </>
  )
}

export default App
