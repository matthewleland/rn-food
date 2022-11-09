import React, { useState } from 'react'

const FavoritesContext = React.createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (id, name) => {
    setFavorites([
      ...favorites,
      {
        id: id,
        name: name,
      },
    ])
  }

  return (
    <FavoritesContext.Provider value={{ data: favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
