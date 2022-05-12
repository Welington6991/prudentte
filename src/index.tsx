import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
  );
};

export default AuthRoutes;
