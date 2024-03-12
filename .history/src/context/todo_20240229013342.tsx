import { createContext } from 'react'
import { useTodo } from '../hooks/useTodo'
import type {
  FilterValue,
  TodoId,
  TodoTitle,
  Todo as TodoType
} from '../types.d'

interface CurrentTodoContextType {
  removeTodo: (id: TodoId) => void
  handleFilterChange?: (filter: FilterValue) => void
  handleRemoveAllTodos?: () => void
  handleCompleted?: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  handleSaveTodo?: (title: TodoTitle) => void
}

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
