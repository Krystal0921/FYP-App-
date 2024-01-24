import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import ScreenLessons from '../screens/lesson/ScreenLessons';

const Stack = createStackNavigator();
const NavigatorLesson = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_COURSE.lessons}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={NAVIGATION_COURSE.lessons}
      component={ScreenLessons}
    />
  </Stack.Navigator>

);

export default NavigatorLesson;
