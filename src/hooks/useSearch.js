import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setError] = useState('')

  const search = async term => {
    setError('')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 10,
          term,
          location: 'glendora',
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setError('Error occurred while making Yelp API request')
    }
  }

  useEffect(() => {
    search('pasta')
    return [search, results, errorMessage]
  }, [])
}
