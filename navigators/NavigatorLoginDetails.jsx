import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_MAIN, NAVIGATION_USER } from '../const/navigations';
import ScreenSignup from '../screens/login/ScreenSignup';
import ScreenMemberSignUp from '../screens/login/ScreenMemberSignUp';
import ScreenEmployerSignUp from '../screens/login/ScreenEmployerSignUp';

const Stack = createStackNavigator();

const NavigatorLoginDetails = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_USER.signup}
  >
    <Stack.Screen
      name={NAVIGATION_MAIN.signup}
      component={ScreenSignup}
      // options={({ route }) => ({
      //   title: route.params.name
      // })}
    />
    <Stack.Screen
      name={NAVIGATION_USER.membersignup}
      component={ScreenMemberSignUp}
    />
    <Stack.Screen
      name={NAVIGATION_USER.employersignup}
      component={ScreenEmployerSignUp}
    />
  </Stack.Navigator>
);

export default NavigatorLoginDetails;
