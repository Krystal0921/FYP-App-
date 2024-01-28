import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_SIGNUP } from '../const/navigations';
import ScreenSignup from '../screens/login/ScreenSignup';
import ScreenMemberSignUp from '../screens/login/ScreenMemberSignUp';
import ScreenEmployerSignUp from '../screens/login/ScreenEmployerSignUp';

const Stack = createStackNavigator();

const NavigatorSignup = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_SIGNUP.signup}
  >
    <Stack.Screen
      name={NAVIGATION_SIGNUP.signup}
      component={ScreenSignup}
      // options={({ route }) => ({
      //   title: route.params.name
      // })}
    />
    <Stack.Screen
      name={NAVIGATION_SIGNUP.memberSignup}
      component={ScreenMemberSignUp}
    />
    <Stack.Screen
      name={NAVIGATION_SIGNUP.employerSignup}
      component={ScreenEmployerSignUp}
    />
  </Stack.Navigator>
);

export default NavigatorSignup;
