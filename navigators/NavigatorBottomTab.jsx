import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION_TAB } from '../const/navigations';
import NavigatorCourses from './NavigatorCourses';
import NavigatorUser from './NavigatorUser';

const Tab = createBottomTabNavigator();
const NavigatorBottomTab = () => (
  <Tab.Navigator
    initialRouteName={NAVIGATION_TAB.course}
    screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#999',
      tabBarStyle: {
        display: 'flex'
      },
      labeled: false
    }}
  >
    <Tab.Screen
      name={NAVIGATION_TAB.course}
      component={NavigatorCourses}
      options={{ title: 'Courses' }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.forum}
      component={NavigatorCourses}
      options={{ title: 'Forum' }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.jobs}
      component={NavigatorCourses}
      options={{ title: 'Jobs' }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.chats}
      component={NavigatorCourses}
      options={{ title: 'Chat' }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.user}
      component={NavigatorUser}
      options={{ title: 'User' }}
    />
  </Tab.Navigator>

);

export default NavigatorBottomTab;
