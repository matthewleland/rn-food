import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { FavoritesProvider } from './src/context/FavoritesContext'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Favorites: FavoritesScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  )
}
