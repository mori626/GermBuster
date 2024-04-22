import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/items/login2';
import Home from './components/items/home';
import * as Font from 'expo-font';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoutButton from './components/items/logoutButton'; // Import the logout button component
import Getstart from './components/items/getstart';


const Stack = createStackNavigator();

const InsideStack= createStackNavigator();



function InsideLayout(){

return(
  <InsideStack.Navigator>

    <InsideStack.Screen name='mytodos' component={Home} options={{headerShown:false}}/>
   
  </InsideStack.Navigator>
);


}



export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load font asynchronously
    const loadFont = async () => {
      await Font.loadAsync({
        'RobotoSerif-Black': require('./assets/fonts/roboto-serif/RobotoSerif-Black.ttf'),
        'OpenSans-SemiBold': require('./assets/fonts/open-sans/OpenSans-SemiBold.ttf'),
        'OpenSans-Bold': require('./assets/fonts/open-sans/OpenSans-Bold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/open-sans/OpenSans-Regular.ttf'),
      });
    };
    loadFont();

     // Check if the user is already authenticated
    const checkAuthState = async () => {
      const userJson = await AsyncStorage.getItem('user');
      const storedUser = userJson ? JSON.parse(userJson) : null;
      setUser(storedUser);
    };
    checkAuthState();

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (user) {
        AsyncStorage.setItem('user', JSON.stringify(user)); // Save user state
      } else {
        AsyncStorage.removeItem('user'); // Remove user state if not authenticated
      }
    });

    // Unsubscribe from auth state changes when component unmounts
    return () => unsubscribe();
    
  }, []);

  

  return (
    
    <NavigationContainer>
      <Getstart/>
       
    </NavigationContainer>
  );
}

/*<Stack.Navigator>
        {user ? (
          <Stack.Screen name='Home' component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown:false }} />
        )}
      </Stack.Navigator>
      <StatusBar style='auto' />*/