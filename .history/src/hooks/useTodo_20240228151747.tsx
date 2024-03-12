import { useState } from 'react'
import type {
  FilterValue,
  TodoId,
  TodoTitle,
  Todo as TodoType
} from '../types.d'
import { TODO_FILTERS } from '../consts'

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

interface Props {
  filterSelected: FilterValue
  removeTodo: (id: TodoId) => void
  onToggleCompleteTodo: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export function useTodo(): Props {
  const [todos, setTodos] = useState(mockTODOS)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )
  const removeTodo = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const activeCount = todos.filter((todo) => todo.completed).length
  const completedCount = todos.length - activeCount

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((el) => {
    if (filterSelected === TODO_FILTERS.COMPLETED) return el.completed
    if (filterSelected === TODO_FILTERS.ACTIVE) return !el.completed
    return el
  })

  const handleRemoveAllTodos = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
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

  const handleSaveTodo = (title: TodoTitle): void => {
    console.log(title)
    const newTodo = {
      id: Math.random(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return {
    filterSelected,
    removeTodo,
    activeCount,
    completedCount,
    handleFilterChange,
    filteredTodos,
    handleRemoveAllTodos,
    handleCompleted,
    handleSaveTodo
  }
}
