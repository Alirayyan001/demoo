// Wallet.js
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Wallet = ({ navigation }) => {
  const handleAddCredit = () => {
    navigation.navigate('Topup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.creditLabel}>Your Credit</Text>
        <Text style={styles.creditAmount}>0 PKR</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCredit}>
          <Text style={styles.addButtonText}>Add Credit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ff4500',
    height: 180,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
  },
  content: {
    bottom : 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  creditLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  creditAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
  addButton: {
    top : 10,
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Wallet;
