import type { TODO_FILTERS } from './consts'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<TodoId, 'id'>
export type TodoTitle = Pick<TodoTitle, 'title'>

export type TodoList = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface StateTranslator {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  isLoading: boolean
}

export type Action =
  | { type: 'REMOVE_TODO' }
  | { type: 'REMOVE_ALL' }
  | { type: 'CHECK_TODO' }
  | { type: 'CHANGE_FILTER' }
