import { NavigationContainer } from '@react-navigation/native';
import { useRef } from 'react';
import NavigatorMain from './NavigatorMain';
import { storeData } from '../const/AsyncStorage';
import AuthProvider from '../components/AuthProvider';

const NavigatorApp = () => {
  const navigationRef = useRef(null);

  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <NavigatorMain />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default NavigatorApp;
