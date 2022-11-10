import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native'
import { Context } from '../context/FavoritesContext'
import { FontAwesome } from '@expo/vector-icons'

function FavoritesScreen({ navigation }) {
  const { state, addFavorite, deleteFavorite } = useContext(Context)

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={favoritesList => {
          return favoritesList.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity onPress={() => deleteFavorite(item.id)}>
                  <FontAwesome
                    style={styles.icon}
                    name='trash'
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <Button
        title='Return to Search'
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 22,
  },
  icon: {
    fontSize: 28,
  },
})

export default FavoritesScreen
