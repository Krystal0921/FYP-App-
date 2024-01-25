import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_MAIN } from '../const/navigations';
import NavigatorBottomTab from './NavigatorBottomTab';
import NavigatorLesson from './NavigatorLesson';
import NavigatorChat from './NavigatorChat';

const Stack = createStackNavigator();
const NavigatorMain = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_MAIN.home}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={NAVIGATION_MAIN.home} component={NavigatorBottomTab} />
    <Stack.Screen name={NAVIGATION_MAIN.lesson} component={NavigatorLesson} />
    <Stack.Screen name={NAVIGATION_MAIN.chat} component={NavigatorChat} />
  </Stack.Navigator>
);

export default NavigatorMain;
