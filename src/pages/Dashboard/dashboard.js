import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Home from './home.js';
import Profile from './profile.js';
import Logout from '../logout.js';
import Root from '../../routes/authRoutes.js';

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: ({focused, size}) => ( <Ionicons name="md-home" size={size} color={'#000000'} /> ), }}/>
      <Drawer.Screen name="Configurações" component={Profile} options={{ drawerIcon: ({focused, size}) => ( <Ionicons name="settings" size={size} color={'#000000'} /> ), }}/>
      <Drawer.Screen name="Sair" component={Logout}  options={{ drawerIcon: ({focused, size}) => ( <Ionicons name="exit" size={size} color={'#000000'} /> ), }}/>
      <Drawer.Screen name="Root" component={Root} options={{ drawerItemStyle: { display: 'none' }, headerShown: false }}  />
    </Drawer.Navigator>
  );
}