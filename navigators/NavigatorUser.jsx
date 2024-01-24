import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_USER } from '../const/navigations';
import ScreenLogin from '../screens/login/ScreenLogin';
import ScreenSignup from '../screens/login/ScreenSignup';

const Stack = createStackNavigator();
const NavigatorLogin = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_USER.login}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={NAVIGATION_USER.login}
      component={ScreenLogin}
    />
    <Stack.Screen
      name={NAVIGATION_USER.signup}
      component={ScreenSignup}
    />
  </Stack.Navigator>

);

export default NavigatorLogin;
