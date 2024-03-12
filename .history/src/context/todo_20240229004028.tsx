import { createContext } from 'react'
import { useTodo } from '../hooks/useTodo'
export const TodoContext = createContext()

export function TodoProvider({ children }) {
  const { addToCart, removeFromCart, clearCart, state } = useCartReducer()
  return (
    <TodoContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
