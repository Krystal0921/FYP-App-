import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import ScreenCourses from '../screens/lesson/ScreenCourses';

const Stack = createStackNavigator();

const NavigatorCourses = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_COURSE.courses}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen
            name={NAVIGATION_COURSE.courses}
            component={ScreenCourses}
        />
    </Stack.Navigator>
);

export default NavigatorCourses;