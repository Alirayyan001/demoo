import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WalletScreen = () => {
  const navigation = useNavigation();

  const handleTopupPress = () => {
    navigation.navigate('Topup'); // Assuming 'TopUp' is the name of the topup screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.walletText}>Wallet</Text>
              </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>PKR 42.87</Text>
        <Text style={styles.availableBalance}>Available Balance</Text>
        <TouchableOpacity onPress={handleTopupPress} style={styles.walletIconContainer}>
          <Ionicons name="wallet-outline" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsTitle}>ezPoints</Text>
        <Text style={styles.pointsDescription}>
          ezPoints can be redeemed once you have earned over 50 points. Once redeemed, credit will be reflected in your wallet balance
        </Text>
        <View style={styles.redeemContainer}>
          <Text style={styles.points}>6 Points</Text>
          <TouchableOpacity style={styles.redeemButton}>
            <Text style={styles.redeemText}>Redeem</Text>
          </TouchableOpacity>
        </View>
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
    height: 100,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  time: {
    color: 'white',
    fontSize: 18,
    position: 'absolute',
    top: 15,
    left: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  walletText: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 125,
  },
  balanceContainer: {
    top : 20,
    backgroundColor: '#ff4500',
    height: 220,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
       borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    position: 'relative',
  },
  balance: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  availableBalance: {
    color: 'white',
    fontSize: 18,
    marginTop: 1,
  },
  balanceDescription: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  walletIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 50,
  },
  pointsContainer: {
    padding: 20,
    marginTop: 20,
  },
  pointsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  redeemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  redeemButton: {
    padding: 10,
    backgroundColor: '#ff7f50',
    borderRadius: 25,
  },
  redeemText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WalletScreen;
