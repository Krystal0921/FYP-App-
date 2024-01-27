import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_FORUM } from '../const/navigations';
import ScreenForum from '../screens/forum/ScreenForum';
import ScreenCreateForum from '../screens/forum/ScreenCreateForum';
import ScreenEditForum from '../screens/forum/ScreenEditForum';
import ScreenPost from '../screens/forum/ScreenPost';

const Stack = createStackNavigator();

const NavigatorForum = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_FORUM.forum}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen
            name={NAVIGATION_FORUM.forum}
            component={ScreenForum}
        />
        <Stack.Screen
            name={NAVIGATION_FORUM.createforum}
            component={ScreenCreateForum}
        />
        <Stack.Screen
            name={NAVIGATION_FORUM.postforum}
            component={ScreenPost}
        />
        <Stack.Screen
            name={NAVIGATION_FORUM.editforum}
            component={ScreenEditForum}
        />
    </Stack.Navigator>
);

export default NavigatorForum;