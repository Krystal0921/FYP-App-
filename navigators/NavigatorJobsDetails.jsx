import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_JOB } from '../const/navigations';
import ScreenJobsDetails from '../screens/job/ScreenJobsDetails';

const Stack = createStackNavigator();

const NavigatorJobDetails = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_JOB.job}
  >
    <Stack.Screen
      name={NAVIGATION_JOB.job}
      component={ScreenJobsDetails}
    />
  </Stack.Navigator>
);

export default NavigatorJobDetails;
