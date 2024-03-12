interface Props {
  id: number
  title: string
  completed: boolean
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo: Props) => {
        return <li key={todo.id}>{todo.title}</li>
      })}
    </ul>
  )
}
