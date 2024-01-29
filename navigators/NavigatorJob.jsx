import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_JOB } from '../const/navigations';
import ScreenJobs from '../screens/job/ScreenJobs';

const Stack = createStackNavigator();

const NavigatorJob = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_JOB.jobs}
  >
    <Stack.Screen
      options={{ headerShown: false }}
      name={NAVIGATION_JOB.jobs}
      component={ScreenJobs}
    />
  </Stack.Navigator>
);

export default NavigatorJob;
