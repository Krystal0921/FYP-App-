import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authContext = createContext();

export const useAuth = () => useContext(authContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const onLogin = async (user) => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const onLogout = () => {
    console.log('Logout');
    AsyncStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    // update user when app is loaded
    AsyncStorage.getItem('user').then((user) => {
      setUser(user ? JSON.parse(user) : null);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  return (
    <authContext.Provider value={{ user, onLogin, onLogout }}>
      {loading ? null : children}
    </authContext.Provider>
  );
};

export default AuthProvider;
