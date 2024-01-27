import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import ScreenLessons from '../screens/lesson/ScreenLessons';
import ScreenQuiz from '../screens/lesson/ScreenQuiz';

const Stack = createStackNavigator();

const NavigatorLesson = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_COURSE.lessons}
    >
        <Stack.Screen
            name={NAVIGATION_COURSE.lessons}
            component={ScreenLessons}
        />
        <Stack.Screen
            name={NAVIGATION_COURSE.quiz}
            component={ScreenQuiz}
        />
    </Stack.Navigator>
);

export default NavigatorLesson;