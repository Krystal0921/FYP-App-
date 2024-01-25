import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_FORUM } from '../const/navigations';
import ScreenForum from '../screens/forum/ScreenForum';

const Stack = createStackNavigator();
const NavigatorForum = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_FORUM.forum}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={NAVIGATION_FORUM.forum}
      component={ScreenForum}
    />
  </Stack.Navigator>
);
export default NavigatorForum;
