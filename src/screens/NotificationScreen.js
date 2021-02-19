import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={style.container}>
      <Text>You are on Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#b6ff5c',
  },
});
