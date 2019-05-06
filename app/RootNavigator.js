import { createStackNavigator, createAppContainer } from "react-navigation";
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: CharacterList
  },
Detail: {
    screen: CharacterDetail
}
});

export default createAppContainer(AppNavigator);