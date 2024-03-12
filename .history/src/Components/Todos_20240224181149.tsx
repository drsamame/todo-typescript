interface Todos {
  id: number
  title: string
  completed: boolean
}

interface Props {
  list: Todos[]
}

export const Todos: React.FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>
      })}
    </ul>
  )
}
