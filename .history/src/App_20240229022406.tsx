import { Todos } from './Components/Todos'
import { Footer } from './Components/Footer'
import { useTodo } from './hooks/useTodo'
import { Header } from './Components/Header'
import { TodoProvider } from './context/todoContext'

const App = (): JSX.Element => {
  const {
    filterSelected,
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
        <TodoProvider>
          <Header saveTodo={handleSaveTodo} />
          <Todos
            onToggleCompleteTodo={handleCompleted}
          />
          <Footer
            handleFilterChange={handleFilterChange}
            completedCount={completedCount}
            activeCount={activeCount}
            filterSelected={filterSelected}
            onClearCompleted={handleRemoveAllTodos}
          />
        </TodoProvider>
      </div>
    </>
  )
}

export default App
