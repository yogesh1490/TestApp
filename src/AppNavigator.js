import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './screen/Splash';
import Movies from './screen/Movies';
import Details from './screen/Details';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },

    Movies: {
      screen: Movies,
      navigationOptions: {
        header: null,
      },
    },

    Details: {
      screen: Details,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(AppNavigator);
