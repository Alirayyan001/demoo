import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import moment from 'moment';  // Import moment for date formatting

const AnnouncementScreen = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://192.168.10.8:5001/api/announcements');
        // Sort announcements by creation date in descending order
        const sortedAnnouncements = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAnnouncements(sortedAnnouncements);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the announcements!", error);
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Announcements</Text>
      </View>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.announcementContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Text style={styles.date}>
              Added on: {moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#ff4500',
    height: 180,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    marginLeft: 20,
  },
  listContent: {
    paddingTop: 20, // Add some padding at the top of the FlatList
  },
  announcementContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
  date: {  // Add styles for the date
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default AnnouncementScreen;
