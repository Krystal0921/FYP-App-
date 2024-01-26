import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_JOB } from '../const/navigations';
import ScreenJobs from '../screens/job/ScreenJobs';
import ScreenForum from '../screens/forum/ScreenForum';

const Stack = createStackNavigator();

const NavigatorJob = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_JOB.jobs}
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen
            name={NAVIGATION_JOB.jobs}
            component={ScreenJobs}
        />
    </Stack.Navigator>
);

export default NavigatorJob;