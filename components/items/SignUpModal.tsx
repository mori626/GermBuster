import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles.jsx'; // Import your styles

const SignUpModal = ({ showSignUpModal, setShowSignUpModal, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, name, setName, isPasswordVisible, togglePasswordVisibility, signUp, loading }) => {
  return (
    <Modal
      visible={showSignUpModal}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        {/* Your sign-up form UI */}
        <TouchableOpacity onPress={() => setShowSignUpModal(false)}>
          <View style={styles.close}>
            <Ionicons
              name='close'
              size={28}
              color="black"
              paddingBottom={20}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.modaltextContainer}>
          <View style={styles.textBoxContainer}>
            <Text style={styles.logInHeader}>Sign Up</Text>
            <Text style={styles.TextBoxlogInHeader}>Name</Text>
            <TextInput
              placeholder="Name"
              style={styles.logInCreds}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Text style={styles.TextBoxlogInHeader}>Email</Text>
            <TextInput
              placeholder="Email"
              style={styles.logInCreds}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Text style={styles.TextBoxlogInHeader}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Password"
                style={styles.logInCreds}
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => setPassword(text)}
                value={password}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.togglePasswordVisibility}
                onPress={togglePasswordVisibility}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={21}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.TextBoxlogInHeader}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Confirm Password"
                style={styles.logInCreds}
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                autoCapitalize="none"
              />
            </View>
            {/* Rest of your sign-up form */}
            <View style={styles.logInContainer}>
              <TouchableOpacity onPress={signUp} style={[styles.logInButton, { marginTop: 15 }]}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpModal;
