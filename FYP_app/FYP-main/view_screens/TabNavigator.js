import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Chat from './Chat'
import JobList from './JobList';
import UserScreen from './UserScrees';


const Tab1Screen = () => {
    return (
        <Chat/>
    );
};

const Tab2Screen = () => {
    return (
        <JobList/>
    );
};

const Tab3Screen = () => {
    return (
        <UserScreen/>
    );
};

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    const handleTabPress = (routeName) => {
        navigation.navigate(routeName);
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#999',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    display: 'flex',
                },
            }}
        >
            <Tab.Screen
                name="Chat"
                component={Tab1Screen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => handleTabPress('Chat')}>
                            <Image
                                source={focused ? require('../assets/icon.png') : require('../assets/icon.png')}
                                style={styles.tabIcon}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="JobList"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Job List',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => handleTabPress('JobList')}>
                            <Image
                                source={focused ? require('../assets/icon.png') : require('../assets/icon.png')}
                                style={styles.tabIcon}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="UserInfo"
                component={Tab3Screen}
                options={{
                    tabBarLabel: 'User Info',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => handleTabPress('UserInfo')}>
                            <Image
                                source={focused ? require('../assets/icon.png') : require('../assets/icon.png')}
                                style={styles.tabIcon}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    tabIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default TabNavigator;