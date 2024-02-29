import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_USER } from '../const/navigations';
import ScreenLogin from '../screens/login/ScreenLogin';
import ScreenUser from '../screens/user/ScreenUser';
import { useAuth } from '../components/AuthProvider';

const Stack = createStackNavigator();

const NavigatorLogin = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name={NAVIGATION_USER.userLogin}
          component={ScreenUser}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name={NAVIGATION_USER.login}
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
      )}

    </Stack.Navigator>
  );
};

export default NavigatorLogin;
