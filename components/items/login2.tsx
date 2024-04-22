import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig"; // Import FIREBASE_AUTH and FIREBASE_DB
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import SignUpModal from "./SignUpModal";
import styles from "./styles";

const Login = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const logIn = async () => {
      setLoading(true);
      try {
          // Try to sign in with email
          const emailResponse = await signInWithEmailAndPassword(FIREBASE_AUTH, username, password);
          console.log(emailResponse);
      } catch (emailError) {
          // If signing in with email fails, try to sign in with name
          try {
              const nameResponse = await signInWithEmailAndPassword(FIREBASE_AUTH, `${name}@example.com`, password);
              console.log(nameResponse);
          } catch (nameError) {
              console.log(nameError);
              alert('Sign In failed: ' + nameError.message);
          }
      } finally {
          setLoading(false);
      }
  };
  
  const signUp = async () => {
    setLoading(true);
    try {
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        alert('Both Password Should Be Matched!');
        return; // Exit the function if passwords do not match
      }
  
      // Create the user account with email and password
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, username, password);
  
      // Set the display name of the user
      await updateProfile(userCredential.user, {
        displayName: name
      });
  
      // Add user data to Firestore
      await addDoc(collection(FIREBASE_DB, 'users'), {
        name: name,
        email: username,
        password: password
      });
  
      console.log("User signed up successfully:", userCredential.user);
    } catch (error) {
      console.log("Sign Up failed:", error);
      alert('Sign Up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  

    const handleSignUpButtonPress = () => {
        setShowSignUpModal(true);
    };

    const handleSignUp = () => {
        setShowSignUpModal(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textBoxContainer}>
                <Text style={styles.logInHeader}>LOGIN</Text>
                <Text style={styles.TextBoxlogInHeader}>Username</Text>
                <TextInput
                    value={username}
                    placeholder="Username"
                    style={styles.logInCreds}
                    onChangeText={text => setUsername(text)}
                />
                <Text style={styles.TextBoxlogInHeader}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        style={styles.logInCreds}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={text => setPassword(text)}
                        value={password}
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
                <View style={styles.logInContainer}>
                    <KeyboardAvoidingView behavior="padding">
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <>
                                <TouchableOpacity onPress={logIn} style={styles.logInButton}>
                                    <Text style={[styles.buttonText]}>LOGIN</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </KeyboardAvoidingView>
                    <Text style={styles.or}>or</Text>
                    <TouchableOpacity onPress={handleSignUpButtonPress} style={styles.signUpButton}>
                        <Text style={styles.signUpButton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SignUpModal
                showSignUpModal={showSignUpModal}
                setShowSignUpModal={setShowSignUpModal}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                signUp={signUp}
                loading={loading}
            />
        </View>
    );
};

export default Login;
