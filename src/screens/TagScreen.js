import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TagScreen = () => {
  return (
    <View style={style.container}>
      <Text>You are on Tags Screen</Text>
    </View>
  );
};

export default TagScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff9e3d',
    // backgroundColor: "#fff",
  },
});
