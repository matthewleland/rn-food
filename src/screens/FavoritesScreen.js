import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FavoritesContext from '../context/FavoritesContext'

function FavoritesScreen() {
  const { data, addFavorite } = useContext(FavoritesContext)

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={favoritesList => {
          return favoritesList.id
        }}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default FavoritesScreen
