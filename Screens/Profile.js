import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [maleProfilePicture, setMaleProfilePicture] = useState(require('../assets/malee.png')); // Male profile picture
  const [femaleProfilePicture, setFemaleProfilePicture] = useState(require('../assets/femalee.png')); // Female profile picture
  const [isMaleSelected, setIsMaleSelected] = useState(true); // Boolean to track which profile picture is selected

  const handleSave = () => {
    // Logic to save the changes
    console.log('Username:', username);
    console.log('Phone Number:', phoneNumber);
    console.log('Profile Picture:', isMaleSelected ? 'Male' : 'Female');
  };

  const toggleProfilePicture = () => {
    // Toggle between male and female profile pictures
    setIsMaleSelected(!isMaleSelected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={toggleProfilePicture}>
          <Image source={isMaleSelected ? maleProfilePicture : femaleProfilePicture} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.label}>Change Profile Picture</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
