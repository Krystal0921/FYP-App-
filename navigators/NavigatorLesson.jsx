import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import ScreenLesson from '../screens/lesson/ScreenLesson';

const Stack = createStackNavigator();
const NavigatorLesson = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_COURSE.lessons}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={NAVIGATION_COURSE.lessons}
      component={ScreenLesson}
    />
  </Stack.Navigator>

);

export default NavigatorLesson;
