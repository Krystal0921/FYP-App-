import { NavigationContainer } from '@react-navigation/native';
import { useRef } from 'react';
import NavigatorMain from './NavigatorMain';

const NavigatorApp = () => {
    const navigationRef = useRef(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <NavigatorMain/>
        </NavigationContainer>
    );
};

export default NavigatorApp;