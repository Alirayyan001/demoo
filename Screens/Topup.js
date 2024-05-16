import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TopUpScreen = ({ navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('100');
  const [paymentMethod, setPaymentMethod] = useState('EasyPaisa Mobile Account');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Top Up Credit</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.amountContainer}>
          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === '100' && styles.selectedAmountOption]}
            onPress={() => setSelectedAmount('100')}
          >
            <Text style={styles.amountText}>PKR 100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === '250' && styles.selectedAmountOption]}
            onPress={() => setSelectedAmount('250')}
          >
            <Text style={styles.amountText}>PKR 250</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.amountOption, selectedAmount === '500' && styles.selectedAmountOption]}
            onPress={() => setSelectedAmount('500')}
          >
            <Text style={styles.amountText}>PKR 500</Text>
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="EasyPaisa Mobile Account" value="EasyPaisa Mobile Account" />
          <Picker.Item label="JazzCash Mobile Account" value="JazzCash Mobile Account" />
          <Picker.Item label="Bank Transfer" value="Bank Transfer" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="+92 Mobile Number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <TouchableOpacity style={styles.topUpButton}>
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
    padding: 20,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  amountOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedAmountOption: {
    backgroundColor: '#ff4500',
  },
  amountText: {
    color: 'black',
  },
  picker: {
    height: 50,
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  topUpButton: {
    backgroundColor: '#ff4500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  topUpButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default TopUpScreen;
