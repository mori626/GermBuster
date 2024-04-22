import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LogoutButton from './logoutButton';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const HomeScreen = () => {
  const data = [
    { key: '1', text: 'Photo 1' },
    { key: '2', text: 'Photo 2' },
    { key: '3', text: 'Photo 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.photoBox}>
      <Text style={styles.photoText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.HomeScreen}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to our Housekeeping Reservation App!</Text>
        </View>
        <Carousel
          data={data}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={200}
          loop
          autoplay
          autoplayInterval={3000}
          windowSize={2}
        />
        <View style={styles.productBoxes}>
          <View style={styles.productBox}>
            <Text style={styles.productText}>Product 1</Text>
          </View>
          <View style={styles.productBox}>
            <Text style={styles.productText}>Product 2</Text>
          </View>
          <View style={styles.productBox}>
            <Text style={styles.productText}>Product 3</Text>
          </View>
        </View>
        <LogoutButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
