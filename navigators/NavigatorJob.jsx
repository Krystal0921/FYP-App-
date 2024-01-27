import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION_JOB } from '../const/navigations';
import ScreenJobs from '../screens/job/ScreenJobs';
import ScreenJobsDetails from '../screens/job/ScreenJobsDetails';

const Stack = createStackNavigator();

const NavigatorJob = () => (
    <Stack.Navigator
        intialRouteName={NAVIGATION_JOB.jobs}
    
    >
        <Stack.Screen
            name={NAVIGATION_JOB.jobs}
            component={ScreenJobs}
        />
        <Stack.Screen
            name={NAVIGATION_JOB.jobsdetails}
            component={ScreenJobsDetails}
        />
    </Stack.Navigator>
);

export default NavigatorJob;