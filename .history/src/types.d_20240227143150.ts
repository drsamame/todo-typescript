export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<TodoId, 'id'>
export type TodoTitle = Pick<TodoTitle, 'title'>

export type TodoList = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]