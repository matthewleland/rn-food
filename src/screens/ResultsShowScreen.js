import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState()
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return <View>
    <Text style={styles.name}>{result.name}</Text>
    <FlatList
      horizontal
      data={result.photos}
      keyExtractor={photo => photo}
      renderItem={({ item }) => {
        return <Image style={styles.image} source={{ uri: item }}></Image>
      }}
    />
    <Text style={styles.detail}>{result.display_phone}</Text>
    <Text style={styles.detail}>{result.location.display_address}</Text>
  </View>
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 15
  },
  image: {
    height: 200,
    width: 300,
    marginHorizontal: 15
  },
})

export default ResultsShowScreen