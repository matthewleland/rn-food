import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Button,
} from 'react-native'
import yelp from '../api/yelp'
import FavoritesContext from '../context/FavoritesContext'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState()
  const [reviews, setReviews] = useState()
  const id = navigation.getParam('id')
  const { data, addFavorite } = useContext(FavoritesContext)

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
  const userTwo = reviews[1].user.name + ' (' + reviews[1].rating + '/5)'
  const userThree = reviews[2].user.name + ' (' + reviews[2].rating + '/5)'

  const textOne = reviews[0].text
  const textTwo = reviews[1].text
  const textThree = reviews[2].text

  return (
    <View style={styles.all}>
      <ScrollView>
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
        <Text style={styles.info}>Phone: {result.display_phone}</Text>
        <Text style={styles.info}>
          Address: {result.location.display_address}
        </Text>
        <Button
          title='Add to Favorites'
          onPress={() => addFavorite(id, result.name)}
        />
      </ScrollView>
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
  review: {
    fontSize: 15,
    margin: 10,
  },
  image: {
    height: 200,
    width: 300,
    margin: 10,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
})

export default ResultsShowScreen
