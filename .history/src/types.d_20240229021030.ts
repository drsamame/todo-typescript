import type { TODO_FILTERS } from './consts'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<TodoId, 'id'>
export type TodoTitle = Pick<TodoTitle, 'title'>

export type TodoList = Todo[]

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]

export interface StateTranslator {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  isLoading: boolean
}

export type Action =
  | { type: 'REMOVE_TODO', payload: { id: number } }
  | { type: 'REMOVE_ALL_COMPLETED' }
  | { type: 'CHECK_TODO', payload: { id: number, completed: boolean } }
  | { type: 'CHANGE_FILTER', payload: { filterSelected: FilterValue } }
  | { type: 'SAVE_TODO', payload: { title: TodoTitle } }

export interface CurrentTodoContextType {
  removeTodo: (id: TodoId) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemoveAllTodos?: () => void
  handleCompleted?: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  handleSaveTodo?: (title: TodoTitle) => void
}
