interface TodosInterface {
  id: number
  title: string
  completed: boolean
}

type ListOfTodos = TodosInterface[]

interface Props {
  list: ListOfTodos
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
