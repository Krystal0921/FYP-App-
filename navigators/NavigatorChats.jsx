import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_CHAT } from '../const/navigations';
import ScreenChats from '../screens/chat/ScreenChats';
import ScreenChat from '../screens/chat/ScreenChat';

const Stack = createStackNavigator();
const NavigatorChats = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_CHAT.chats}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={NAVIGATION_CHAT.chats}
      component={ScreenChats}
    />
  </Stack.Navigator>
);
export default NavigatorChats;
