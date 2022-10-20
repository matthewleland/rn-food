import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState()
  const [reviews, setReviews] = useState([])
  const id = navigation.getParam('id')

  const getResult = async id => {
    const rslt = await yelp.get(`/${id}`)
    setResult(rslt.data)
  }

  const getReviews = async id => {
    const rvs = await yelp.get(`/${id}/reviews`).then(response => {
      setReviews(response.data.reviews)
    })
  }

  useEffect(() => {
    getResult(id)
    getReviews(id)
  }, [])

  if (!result) {
    return null
  }

  if (!reviews) {
    return null
  }

  const userOne = reviews[0].user.name + ' (' + reviews[0].rating + '/5)'
  const textOne = reviews[0].text
  const userTwo = reviews[1].user.name + ' (' + reviews[1].rating + '/5)'
  const textTwo = reviews[1].text
  const userThree = reviews[2].user.name + ' (' + reviews[2].rating + '/5)'
  const textThree = reviews[2].text

  return (
    <View style={styles.all}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{ uri: item }}
            ></Image>
          )
        }}
      />
      <Text style={styles.user}>{userOne}</Text>
      <Text style={styles.review}>{textOne}</Text>
      <Text style={styles.user}>{userTwo}</Text>
      <Text style={styles.review}>{textTwo}</Text>
      <Text style={styles.user}>{userThree}</Text>
      <Text style={styles.review}>{textThree}</Text>
      <Text style={styles.detail}>Phone: {result.display_phone}</Text>
      <Text style={styles.detail}>
        Address: {result.location.display_address}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  all: {
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  detail: {
    fontSize: 15,
    margin: 10,
  },
  image: {
    height: 200,
    width: 300,
    margin: 10,
  },
  review: {
    marginHorizontal: 10,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
})

export default ResultsShowScreen
