import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const TopUpScreen = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [accountType, setAccountType] = useState('Easypaisa');
  const [accountNumber, setAccountNumber] = useState('');

  const handleTopUp = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        alert('Please login first');
        return;
      }

      const response = await axios.post(
        'http://192.168.10.5:5001/api/topup',
        { amount: selectedAmount, accountType, accountNumber },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('Topup request sent.', response.data);
      alert('Topup request sent.');
    } catch (error) {
      console.error('Error sending topup request:', error);
      alert('Error sending topup request. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Top Up Credit</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.instructionText}>Please select an amount to top up:</Text>
        <View style={styles.amountContainer}>
          {['100', '250', '500'].map((amount) => (
            <TouchableOpacity
              key={amount}
              style={[styles.amountOption, selectedAmount === amount && styles.selectedAmountOption]}
              onPress={() => setSelectedAmount(amount)}
            >
              <Text style={styles.amountText}>PKR {amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.instructionText}>Select account type:</Text>
        <View style={styles.accountTypeContainer}>
          <RNPickerSelect
            onValueChange={(value) => setAccountType(value)}
            items={[
              { label: 'Easypaisa', value: 'Easypaisa' },
              { label: 'JazzCash', value: 'JazzCash' },
            ]}
            value={accountType}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>
        <Text style={styles.instructionText}>Enter account number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />
        <TouchableOpacity style={styles.topUpButton} onPress={handleTopUp}>
          <Text style={styles.topUpButtonText}>Top Up</Text>
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
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  amountOption: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  selectedAmountOption: {
    backgroundColor: '#ff4500',
  },
  amountText: {
    color: 'black',
  },
  accountTypeContainer: {
    marginVertical: 20,
    width: '100%',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
    width: '100%',
  },
  topUpButton: {
    marginTop: 30,
    backgroundColor: '#ff4500',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  topUpButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f8f8f8',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#f8f8f8',
  },
});

export default TopUpScreen;
