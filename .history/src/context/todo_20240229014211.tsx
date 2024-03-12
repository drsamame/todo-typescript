import { createContext } from 'react'
import { useTodo } from '../hooks/useTodo'
import type { CurrentTodoContextType } from '../types.d'

export const TodoContext = createContext<CurrentTodoContextType | null>(null)

export function TodoProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const {
    removeTodo,
    handleFilterChange,
    handleRemoveAllTodos,
    handleCompleted,
    handleSaveTodo
  } = useTodo()
  return (
    <TodoContext.Provider
      value={{
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
