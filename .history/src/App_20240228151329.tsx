import { useState } from 'react'
import { Todos } from './Components/Todos'
import { Footer } from './Components/Footer'
import { useTodo } from './hooks/useTodo'
import type {
  FilterValue,
  TodoId,
  TodoTitle,
  Todo as TodoType
} from './types.d'
import { TODO_FILTERS } from './consts'
import { Header } from './Components/Header'

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
  const {
    filterSelected,
    removeTodo,
    activeCount,
    completedCount,
    handleFilterChange,
    filteredTodos,
    handleRemoveAllTodos,
    handleCompleted,
    handleSaveTodo
  } = useTodo()
  return (
    <>
      <div className='todoapp'>
        <Header saveTodo={handleSaveTodo} />
        <Todos
          list={filteredTodos}
          removeTodo={removeTodo}
          onToggleCompleteTodo={handleCompleted}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllTodos}
        />
      </div>
    </>
  )
}

export default App
