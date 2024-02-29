import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_CHAT } from '../const/navigations';
import ScreenChats from '../screens/chat/ScreenChats';
import { useAuth } from '../components/AuthProvider';
import ScreenLogin from '../screens/login/ScreenLogin';

const Stack = createStackNavigator();

const NavigatorChats = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name={NAVIGATION_CHAT.chats}
          component={ScreenChats}
          screenOptions={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name={NAVIGATION_CHAT.chatLogin}
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default NavigatorChats;
