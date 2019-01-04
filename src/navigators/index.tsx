import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import List from '../containers/Home/List';
import Detail from '../containers/Home/Detail';

const StackRouteConfigs = {
  Home: { screen: Home },
  List: { screen: List },
  Detail: { screen: Detail },
};

const StackConfig = {
  defaultNavigationOptions: {
    // headerTintColor: '#fff',
    // headerStyle: {
    //   backgroundColor: '#000',
    // },
  },
  navigationOptions: {
    // tabBarLabel: 'Home!',
  },
};

const StackNavigator = createStackNavigator(StackRouteConfigs, StackConfig);

export default StackNavigator;
