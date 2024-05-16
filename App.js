import {
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import NavigationDrawer from './Navigation/NavigationDrawer';
import ComplainScreen from './Screens/Complain';
import HistoryScreen from './Screens/History';
import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';
import ProfileScreen from './Screens/Profile';
import RegisterScreen from './Screens/Register';
import SettingScreen from './Screens/Setting';
import SignoutScreen from "./Screens/Signout";
import TicketScreen from './Screens/Ticket';
import TopupScreen from './Screens/Topup';
import WalletScreen from './Screens/Wallet';
import WelcomeScreen from './Screens/Welcome';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
        <Stack.Screen name="Complain" component={ComplainScreen} />
        <Stack.Screen name="Signout" component={SignoutScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} />
        <Stack.Screen name="Topup" component={TopupScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
