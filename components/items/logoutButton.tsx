import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import { signOut } from 'firebase/auth'; // Make sure this import statement is correct
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const LogoutButton = () => {
  const navigation = useNavigation(); // Initialize the navigation object
  const handleLogout = async () => {
    // Display a confirmation popup before logging out
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await signOut(FIREBASE_AUTH); // Call the signOut function with your Firebase auth instance
              navigation.navigate('Login' as never); // Navigate to the login page after logout
            } catch (error) {
              console.error('Error signing out:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LogoutButton;
