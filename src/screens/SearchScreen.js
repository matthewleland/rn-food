import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useSearch from '../hooks/useSearch'

function SearchScreen() {
  const [term, setTerm] = useState('')
  const [search, results, errorMessage] = useSearch()

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => search(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Number of Results: {results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
