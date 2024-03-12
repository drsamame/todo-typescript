import { createContext } from 'react'
import { useTodo } from '../hooks/useTodo'
export const TodoContext = createContext(null)

export function TodoProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const {
    removeTodo,
    handleFilterChange,
    handleRemoveAllTodos,
    handleCompleted,
    handleSaveTodo,
    filteredTodos
  } = useTodo()
  return (
    <TodoContext.Provider
      value={{
        filteredTodos,
        handleRemoveAllTodos,
        removeTodo,
        handleFilterChange,
        handleCompleted,
        handleSaveTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
