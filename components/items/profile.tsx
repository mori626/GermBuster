import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Assuming you have Firebase authentication configured

const ProfilePage = () => {
  const [user, setUser] = useState(null); // State to hold the user data

  useEffect(() => {
    // Function to fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Get the currently authenticated user
        const currentUser = FIREBASE_AUTH.currentUser;

        if (currentUser) {
          // If a user is authenticated, set the user data in the state
          setUser(currentUser);
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData(); // Call the fetchUserData function when the component mounts
  }, []);

  const handleLogout = async () => {
    try {
      await FIREBASE_AUTH.signOut(); // Sign out the user
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        // Display user information if user data is available
        <View style={styles.userInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.info}>{user.displayName}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
          <Button title="Log out" onPress={handleLogout} />
        </View>
      ) : (
        // Display loading message if user data is not yet available
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  userInfo: {
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfilePage;
