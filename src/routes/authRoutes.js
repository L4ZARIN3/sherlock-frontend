import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login.js';
import Register from '../pages/register.js';
import Dashboard from '../pages/Dashboard/dashboard.js';
import JwtAuth from '../pages/jwtauth.js';
import Logout from '../pages/logout.js';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JwtAuth" component={JwtAuth} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}