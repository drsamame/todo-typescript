import { useReducer } from 'react'
import type {
  FilterValue,
  TodoId,
  TodoTitle,
  Todo as TodoType,
  Action,
  TodoList
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

interface typeState {
  todos: TodoList
  filterSelected: FilterValue
}

const initialState: typeState = {
  todos: mockTODOS,
  filterSelected: TODO_FILTERS.ALL
}

function reducer(state: typeState, action: Action): typeState {
  const { type } = action
  switch (type) {
    case 'REMOVE_TODO': {
      const { id } = action.payload
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
      }
    }
    case 'REMOVE_ALL_COMPLETED': {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed)
      }
    }
    case 'CHECK_TODO': {
      const { id, completed } = action.payload
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === id) {
            return {
              id: el.id,
              title: el.title,
              completed
            }
          }
          return el
        })
      }
    }
    case 'CHANGE_FILTER': {
      const { filterSelected } = action.payload
      return {
        ...state,
        filterSelected
      }
    }
    case 'SAVE_TODO': {
      const { title } = action.payload
      const newTodo = {
        id: Math.random(),
        title,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    }
    default:
      return state
  }
}

export const useTodo = (): {
  filterSelected: FilterValue
  removeTodo: (id: TodoId) => void
  completedCount: number
  activeCount: number
  handleFilterChange: (filter: FilterValue) => void
  filteredTodos: TodoType[]
  handleRemoveAllTodos: () => void
  handleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  handleSaveTodo: (title: TodoTitle) => void
} => {
  const [{ todos, filterSelected }, dispatch] = useReducer(
    reducer,
    initialState
  )
  const removeTodo = (id: TodoId): void => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } })
  }
  const activeCount = todos.filter((todo) => todo.completed).length
  const completedCount = todos.length - activeCount

  const handleFilterChange = (filter: FilterValue): void => {
    dispatch({ type: 'CHANGE_FILTER', payload: { filterSelected: filter } })
  }

  const filteredTodos = todos.filter((el) => {
    if (filterSelected === TODO_FILTERS.COMPLETED) return el.completed
    if (filterSelected === TODO_FILTERS.ACTIVE) return !el.completed
    return el
  })

  const handleRemoveAllTodos = (): void => {
    dispatch({ type: 'REMOVE_ALL_COMPLETED' })
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    dispatch({ type: 'CHECK_TODO', payload: { id, completed } })
  }

  const handleSaveTodo = (title: TodoTitle): void => {
    dispatch({ type: 'SAVE_TODO', payload: { title } })
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
