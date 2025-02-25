import 'react-native-gesture-handler';

import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
