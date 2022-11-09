import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useSearch from '../hooks/useSearch'
import { FontAwesome } from '@expo/vector-icons'

function SearchScreen() {
  const [term, setTerm] = useState('')
  const [search, results, errorMessage] = useSearch([])

  const filterResultsByPrice = price => {
    // price === '$' | `$$` | '$$$'
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => search(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          title='Bit Pricier'
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  )
}

SearchScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <FontAwesome
          style={styles.icon}
          name='heart'
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: 'black',
    paddingHorizontal: 10,
  },
})

export default SearchScreen
