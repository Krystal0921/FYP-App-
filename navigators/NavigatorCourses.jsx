import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_COURSE } from '../const/navigations';
import { TouchableOpacity, Icon } from 'react-native';
import ScreenCourses from '../screens/lesson/ScreenCourses';
import ScreenSetting from '../screens/setting/ScreenSetting';

const Stack = createStackNavigator();

const NavigatorCourses = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_COURSE.courses}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen
            name={NAVIGATION_COURSE.courses}
            component={ScreenCourses}
        />
        <Stack.Screen
            name={"ScreenSetting"}
            component={ScreenSetting}
            options={({ navigation }) => ({
                headerTransparent: true,
                headerLeft: () => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name="arrow-back-ios"
                            size={25}
                            style={{ marginLeft: 20 }} 
                        />
                    </TouchableOpacity>
                ),
            })}
        >
        </Stack.Screen>
    </Stack.Navigator>
);

export default NavigatorCourses;