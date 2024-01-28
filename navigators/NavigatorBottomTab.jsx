import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, Pressable, TouchableOpacity, Icon, Text } from 'react-native';
import { NAVIGATION_TAB, NAVIGATION_COURSE } from '../const/navigations';
import NavigatorCourses from './NavigatorCourses';
import NavigatorUser from './NavigatorUser';
import NavigatorForum from './NavigatorForum';
import NavigatorJob from './NavigatorJob';
import NavigatorChats from './NavigatorChats';

const Tab = createBottomTabNavigator();

const NavigatorBottomTab = ({ navigation }) => (
  <Tab.Navigator
    initialRouteName={NAVIGATION_TAB.course}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: {
        display: 'flex',
        backgroundColor: '#55098B'
      },
      labeled: false,
      unmountOnBlur: true
    }}
  >
    <Tab.Screen
      name={NAVIGATION_TAB.forum}
      component={NavigatorForum}
      options={{
        title: 'Forum',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="people-alt" size={24} color={focused ? 'grey' : 'white'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.jobs}
      component={NavigatorJob}
      options={{
        title: 'Jobs',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="work" size={24} color={focused ? 'grey' : 'white'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.course}
      component={NavigatorCourses}
      options={{
        title: 'Home',
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name="home" size={24} color={focused ? 'grey' : 'white'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.chats}
      component={NavigatorChats}
      options={{
        title: 'Chat',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="chat" size={24} color={focused ? 'grey' : 'white'} />
        )
      }}
    />
    <Tab.Screen
      name={NAVIGATION_TAB.user}
      component={NavigatorUser}
      options={{
        title: 'User',
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="person" size={24} color={focused ? 'grey' : 'white'} />
        )
      }}
      screenOptions={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default NavigatorBottomTab;
