import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, PanResponder, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const drawerTranslateX = useRef(new Animated.Value(-250)).current; // Initial position of drawer

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        if (Platform.OS === 'ios') {
          Alert.alert(
            'Permission Denied',
            'Please go to Settings and enable location permissions for this app.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
          );
        }
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg('Failed to fetch location');
      }
    })();
  }, []);

  const goToCurrentLocation = () => {
    if (location) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const navigateToHome= () => {
    navigation.navigate('Home');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToWallet = () => {
    navigation.navigate('Wallet');
  };

  const navigateToTicket = () => {
    navigation.navigate('Ticket');
  };

  const navigateToComplain = () => {
    navigation.navigate('Complain');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle drawer visibility
    Animated.timing(drawerTranslateX, {
      toValue: isMenuOpen ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // PanResponder to handle gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Move the drawer with gesture
        const newX = gestureState.dx;
        drawerTranslateX.setValue(newX);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Determine if drawer should be closed or opened based on gesture
        if (gestureState.dx < -100) {
          setIsMenuOpen(false);
          Animated.timing(drawerTranslateX, {
            toValue: -250,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          setIsMenuOpen(true);
          Animated.timing(drawerTranslateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
        )}
      </MapView>
      <TextInput
        style={styles.input}
        placeholder="Enter destination"
        value={destination}
        onChangeText={handleDestinationChange}
      />
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name="menu-outline" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationButton} onPress={goToCurrentLocation}>
        <Ionicons name="locate-outline" size={35} color="black" />
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: drawerTranslateX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToWallet}>
          <Text>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToTicket}>
          <Text>Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToComplain}>
          <Text>Complain</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    position: 'absolute',
    top: 100,
    left: 15,
    width: '90%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 15,
    padding: 10,
    zIndex: 1,
  },
  locationButton: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    padding: 10,
    zIndex: 1,
  },
  errorMsg: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  drawer: {
    position: 'absolute',
    top: 5,
    left: 0,
    bottom: 0,
    width: 250, // Adjust as per your drawer width
    backgroundColor: 'white',
    zIndex: 2,
    elevation: 5, // For Android elevation
  },
  navItem: {
    padding: 20,
    top: 70,
  },
});

export default HomeScreen;