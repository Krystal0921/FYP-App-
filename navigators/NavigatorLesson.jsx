import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import ScreenLessons from '../screens/lesson/ScreenLessons';
import ScreenQuiz from '../screens/lesson/ScreenQuiz';
import ScreenRead from '../screens/lesson/ScreenRead';
import ScreenFeedback from '../screens/lesson/ScreenFeedback';
import { useAuth } from '../components/AuthProvider';

const Stack = createStackNavigator();

const NavigatorLesson = () => {
  const { user } = useAuth(); // Access the user object from the AuthProvider

  return (
    <Stack.Navigator
      initialRouteName={NAVIGATION_COURSE.lessons} // Set the initial route name
    >
      {/* ScreenLessons */}
      <Stack.Screen
        name={NAVIGATION_COURSE.lessons} // Set the name of the screen
        component={ScreenLessons} // Set the component that will be rendered
        options={({ route }) => ({
          title: route.params.name // Set the title of the screen based on the name parameter passed in route.params
        })}
      />

      {/* ScreenQuiz */}
      <Stack.Screen
        name={NAVIGATION_COURSE.quiz} // Set the name of the screen
        component={ScreenQuiz} // Set the component that will be rendered
        options={() => ({
          title: 'Quiz' // Set the title of the screen
        })}
        params={user} // Pass the user object as params to the screen
      />

      {/* ScreenRead */}
      <Stack.Screen
        name={NAVIGATION_COURSE.read} // Set the name of the screen
        component={ScreenRead} // Set the component that will be rendered
        options={({ route }) => ({
          title: route.params.name // Set the title of the screen based on the name parameter passed in route.params
        })}
        params={user} // Pass the user object as params to the screen
      />

      {/* ScreenFeedback */}
      <Stack.Screen
        name={NAVIGATION_COURSE.feedback} // Set the name of the screen
        component={ScreenFeedback} // Set the component that will be rendered
        options={({ route }) => ({
          title: route.params.name // Set the title of the screen based on the name parameter passed in route.params
        })}
        params={user} // Pass the user object as params to the screen
      />
    </Stack.Navigator>
  );
};

export default NavigatorLesson;
