import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default (id) => {
  const [results, setResults] = useState([])
  const [errorMessage, setError] = useState('')

  const getReviews = async id => {
    try {
      const response = await yelp.get(`/${id}/reviews`, {
        params: {
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setError('Error occurred while making Yelp API request')
    }
  }

  useEffect(() => {
  }, [])

  return [getReviews, results, errorMessage]
}