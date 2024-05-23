import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const NavigationDrawer = ({ drawerTranslateX, panResponder, navigation }) => {
  return (
    <Animated.View
      style={[
        styles.drawer,
        {
          transform: [{ translateX: drawerTranslateX }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity style={styles.profileContainer} onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('../assets/male.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Ali Rayyan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.push('Home')}>
        <Ionicons name="bus" size={20} color="#000" />
        <Text>   Find a route</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Ticket')}>
        <Ionicons name="qr-code" size={20} color="#000" />
        <Text>   Ticketing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Wallet')}>
        <Ionicons name="wallet-outline" size={20} color="#000" />
        <Text>   Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('History')}>
        <Ionicons name="time-outline" size={20} color="#000" />
        <Text>   Travel History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>
        <Ionicons name="settings-outline" size={20} color="#000" />
        <Text>   Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Signout')}>
        <Ionicons name="log-out-outline" size={20} color="#ff3b30" />
        <Text>   Sign Out</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 300, // Adjusted width for drawer
    backgroundColor: '#ECF0F1', // Change background color to light gray
    zIndex: 2,
    elevation: 5, // For Android elevation
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default NavigationDrawer;
