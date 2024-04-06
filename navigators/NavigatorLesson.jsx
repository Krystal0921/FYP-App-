import { createStackNavigator } from "@react-navigation/stack";
import { NAVIGATION_COURSE } from "../const/navigations";
import ScreenLessons from "../screens/lesson/ScreenLessons";
import ScreenQuiz from "../screens/lesson/ScreenQuiz";
import ScreenRead from "../screens/lesson/ScreenRead";
import ScreenFeedback from "../screens/lesson/ScreenFeedback";
import ScreenAIQuiz from "../screens/lesson/ScreenAIQuiz";

import { useAuth } from "../components/AuthProvider";

const Stack = createStackNavigator();

const NavigatorLesson = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator intialRouteName={NAVIGATION_COURSE.lessons}>
      <Stack.Screen
        name={NAVIGATION_COURSE.lessons}
        component={ScreenLessons}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name={NAVIGATION_COURSE.quiz}
        component={ScreenQuiz}
        options={() => ({
          title: "Quiz",
        })}
        params={user}
      />
      <Stack.Screen
        name={NAVIGATION_COURSE.read}
        component={ScreenRead}
        options={({ route }) => ({
          title: route.params.name,
        })}
        params={user}
      />
      <Stack.Screen
        name={NAVIGATION_COURSE.feedback}
        component={ScreenFeedback}
        options={({ route }) => ({
          title: route.params.name,
        })}
        params={user}
      />
      <Stack.Screen
        name={NAVIGATION_COURSE.aiQuiz}
        component={ScreenAIQuiz}
        options={({ route }) => ({
          title: route.params.name,
        })}
        params={user}
      />
    </Stack.Navigator>
  );
};

export default NavigatorLesson;
