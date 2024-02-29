import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_JOB } from '../const/navigations';
import ScreenJobs from '../screens/job/ScreenJobs';
import ScreenLogin from '../screens/login/ScreenLogin';
import { useAuth } from '../components/AuthProvider';

const Stack = createStackNavigator();

const NavigatorJob = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      intialRouteName={NAVIGATION_JOB.jobs}
    >
      {user ? (
        <Stack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION_JOB.jobs}
          component={ScreenJobs}
        />
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name={NAVIGATION_JOB.jobLogin}
          component={ScreenLogin}
        />
      )}
    </Stack.Navigator>
  );
};

export default NavigatorJob;
