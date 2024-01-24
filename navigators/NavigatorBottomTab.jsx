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
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      tabBarStyle: {
        display: 'flex'
      }
    }}
  >
    <Tab.Screen
      name={NAVIGATION_TAB.course}
      component={NavigatorCourses}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.forum}
      component={NavigatorCourses}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.jobs}
      component={NavigatorCourses}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.chats}
      component={NavigatorCourses}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.user}
      component={NavigatorUser}
    />
  </Tab.Navigator>

);

export default NavigatorBottomTab;
