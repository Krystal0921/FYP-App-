import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_USER } from '../const/navigations';
import ScreenLogin from '../screens/login/ScreenLogin';
import ScreenUser from '../screens/user/ScreenUser';

const Stack = createStackNavigator();

const NavigatorLogin = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_USER.login}
  >
    <Stack.Screen
      name={NAVIGATION_USER.login}
      component={ScreenLogin}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={NAVIGATION_USER.user}
      component={ScreenUser}
      options={({ route }) => ({
        title: ''
      })}
    />
  </Stack.Navigator>
);

export default NavigatorLogin;
