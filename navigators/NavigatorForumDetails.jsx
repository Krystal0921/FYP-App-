import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_FORUM } from '../const/navigations';
import ScreenCreateForum from '../screens/forum/ScreenCreateForum';
import ScreenEditForum from '../screens/forum/ScreenEditForum';
import ScreenPost from '../screens/forum/ScreenPost';

const Stack = createStackNavigator();

const NavigatorForumDetails = () => (
  <Stack.Navigator
    intialRouteName={NAVIGATION_FORUM.post}
  >
    <Stack.Screen
      name={NAVIGATION_FORUM.post}
      component={ScreenPost}
      options={({ route }) => ({
        title: ''
      })}
    />
    <Stack.Screen
      name={NAVIGATION_FORUM.createForum}
      component={ScreenCreateForum}
      options={({ route }) => ({
        title: 'Create Post'
      })}
    />
    <Stack.Screen
      name={NAVIGATION_FORUM.editForum}
      component={ScreenEditForum}
      options={({ route }) => ({
        title: 'Edit Post'
      })}
    />
  </Stack.Navigator>
);

export default NavigatorForumDetails;
