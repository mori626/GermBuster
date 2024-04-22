import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';




const Getstart = () =>{
 return (
    <SafeAreaView style={styles.bgGetStartBg}>

        <View style={styles.getStartNameContainer} >

        <Text style={styles.getStartName}>Germ Busters </Text>
        <Text style={styles.getStartSubName}>Cleaning And Sanitizing Services</Text>
        <Text style={styles.getStartTagLine}>Book Cleaners At the Comfort of your home.</Text>
        
        </View>


<View  style= {styles.bgGetStartConatainer}>
    <Image
        source={require('../../assets/photos/bg1.png')} 
        style={styles.bgGetStart}
      />
 </View>     

 <TouchableOpacity style={styles.getStartedBtn}>
    <Text>Get Started</Text>
 </TouchableOpacity>
 
    </SafeAreaView>
 
    );

};
export default Getstart;