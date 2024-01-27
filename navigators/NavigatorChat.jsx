import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_CHAT } from '../const/navigations';
import ScreenChat from '../screens/chat/ScreenChat';

const Stack = createStackNavigator();

const NavigatorChat = () => (
    <Stack.Navigator 
        intialRouteName={NAVIGATION_CHAT.chat} 
    >
        <Stack.Screen 
            name={NAVIGATION_CHAT.chat} 
            component={ScreenChat}
        />
    </Stack.Navigator>
);

export default NavigatorChat;