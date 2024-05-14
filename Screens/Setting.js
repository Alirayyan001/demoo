import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
      <Text style={styles.underDevelopment}>Under Development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  underDevelopment: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default SettingScreen;
