import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './src/routes/authRoutes.js';

export default function App() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
}