import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./../containers/Home";

const StackRouteConfigs = {
  Home: { screen: Home }
};

const StackConfig = {
  initialRouteName: "Home",
  headerMode: "none",
  cardStyle: {
    shadowColor: "transparent"
  }
};

const StackNavigator = createStackNavigator(StackRouteConfigs);

export default createAppContainer(StackNavigator);
