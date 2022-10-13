import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useSearch from '../hooks/useSearch'

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
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => search(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Number of Results: {results.length}</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
