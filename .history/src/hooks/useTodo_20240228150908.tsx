import { useState } from 'react'
import type {
  FilterValue,
  TodoId,
  TodoTitle,
  Todo as TodoType
} from './types.d'

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

export function useTodo() {
  const [todos, setTodos] = useState(mockTODOS)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )
}
