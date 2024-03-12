export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoId = Pick<TodoId, 'id'>
export type TodoTitle = Pick<TodoTitle, 'title'>


export type TodoList = Todo[]
