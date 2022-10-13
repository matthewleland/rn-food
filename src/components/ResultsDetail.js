import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: result.image_url }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 7,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
})

export default ResultsDetail
