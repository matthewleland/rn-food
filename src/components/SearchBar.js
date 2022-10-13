import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <FontAwesome
        style={styles.icon}
        name='search'
      />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        placeholder='enter search...'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    height: 40,
    margin: 10,
    borderRadius: 18,
  },
  icon: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
})

export default SearchBar
