import { NavigationContainer } from '@react-navigation/native';
import { useRef } from 'react';
import NavigatorMain from './NavigatorMain';
import { storeData } from '../const/AsyncStorage';

const NavigatorApp = () => {
  storeData('loggedin', 'false');
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <NavigatorMain />
    </NavigationContainer>
  );
};

export default NavigatorApp;
