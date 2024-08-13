import {
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import NavigationDrawer from './Navigation/NavigationDrawer';
import AnnouncementScreen from './Screens/Announcement';
import DashboardScreen from './Screens/Dashboard';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import SignoutScreen from "./Screens/Signout";
import TopupScreen from './Screens/Topup';
import WalletScreen from './Screens/Wallet';
import WelcomeScreen from './Screens/Welcome';





const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome"          component={WelcomeScreen} />
        <Stack.Screen name="Register"         component={RegisterScreen} />
        <Stack.Screen name="Login"            component={LoginScreen} />
        <Stack.Screen name="Home"             component={HomeScreen} />
        <Stack.Screen name="Wallet"           component={WalletScreen} />
        <Stack.Screen name="Signout"          component={SignoutScreen} />
        <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} />
        <Stack.Screen name="Topup"            component={TopupScreen} />
        <Stack.Screen name="Dashboard"        component={DashboardScreen} />
        <Stack.Screen name="Announcement"        component={AnnouncementScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
