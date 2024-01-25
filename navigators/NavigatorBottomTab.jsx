import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_TAB } from '../const/navigations';
import NavigatorCourses from './NavigatorCourses';
import NavigatorUser from './NavigatorUser';
import NavigatorForum from './NavigatorForum';
import NavigatorJob from './NavigatorJob';
import NavigatorChats from './NavigatorChats';

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
      options={{
        title: 'Courses',
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name="book" size={24} color={focused ? 'purple' : 'black'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.forum}
      component={NavigatorForum}
      options={{
        title: 'Forum',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="people-alt" size={24} color={focused ? 'purple' : 'black'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.jobs}
      component={NavigatorJob}
      options={{
        title: 'Jobs',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="work" size={24} color={focused ? 'purple' : 'black'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.chats}
      component={NavigatorChats}
      options={{
        title: 'Chat',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="chat" size={24} color={focused ? 'purple' : 'black'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.user}
      component={NavigatorUser}
      options={{
        title: 'User',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="person" size={24} color={focused ? 'purple' : 'black'} />
        )
      }}
    />
  </Tab.Navigator>

);

export default NavigatorBottomTab;
