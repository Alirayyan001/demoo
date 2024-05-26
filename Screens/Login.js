import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    // Check if mobile number is 11 digits
    if (mobileNumber.length !== 11) {
      setLoginError('Mobile number should be 11 digits');
      return;
    }

    // Check if password is at least 6 characters long
    if (password.length < 6) {
      setLoginError('Password should be at least 6 characters long');
      return;
    }

    // Check if mobile number and password are provided
    if (!mobileNumber || !password) {
      setLoginError('Please enter mobile number and password');
      return;
    }

    // Check if the user exists in the database
    axios.post('http://192.168.10.18:3000/register', {
      mobileNumber,
      password
    })
    .then(response => {
      console.log('Login response:', response.data);
      // If user exists, navigate to the Dashboard
      navigation.navigate('Dashboard');
    })
    .catch(error => {
      console.error('Error logging in:', error);
      // If user does not exist or other error occurs, show error message
      setLoginError('Invalid mobile number or password');
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Ionicons name="call" size={24} color="orange" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="orange" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white', // Background color
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'orange', // Border color
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange', // Button background color
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: 'orange', // Text color
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  accountText: {
    marginTop: 40,
    color: 'black', // Text color
    fontSize: 16,
    fontWeight: 'italic',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
