import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Text>You are on Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#ff4747",
    // backgroundColor: "pink",
    // backgroundColor: "#fff",
  },
});
