import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_USER } from '../const/navigations';
import ScreenLogin from '../screens/login/ScreenLogin';
import ScreenUser from '../screens/user/ScreenUser';
import ScreenSignup from '../screens/login/ScreenSignup';
import ScreenMemberSignUp from '../screens/login/ScreenMemberSignUp';
import ScreenEmployerSignUp from '../screens/login/ScreenEmployerSignUp';

const Stack = createStackNavigator();

const NavigatorLogin = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={NAVIGATION_USER.login}
      component={ScreenLogin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={NAVIGATION_USER.user}
      component={ScreenUser}
    />
    <Stack.Screen
      name={NAVIGATION_USER.signup}
      component={ScreenSignup}
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

export default NavigatorLogin;
