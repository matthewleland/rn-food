import React, { useReducer } from 'react'
import createDataContext from './createDataContext'

const FavoritesContext = React.createContext()

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'add_favorite':
      return [...state, { id: action.payload.id, name: action.payload.name }]
    case 'delete_favorite':
      return state.filter(favorite => favorite.id !== action.payload)
    default:
      return state
  }
}

const addFavorite = dispatch => {
  return (id, name) => {
    dispatch({ type: 'add_favorite', payload: { id, name } })
  }
}

const deleteFavorite = dispatch => {
  return id => {
    dispatch({ type: 'delete_favorite', payload: id })
  }
}

export const { Context, Provider } = createDataContext(
  favoritesReducer,
  { addFavorite, deleteFavorite },
  []
)

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, dispatch] = useReducer(favoritesReducer, [])

//   return (
//     <FavoritesContext.Provider value={{ data: favorites, addFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   )
// }

// export default FavoritesContext
