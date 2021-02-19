import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/AntDesign';

// export default class TopQA extends React.Component {

// render() {
const UserTopQuestionAnswer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Top Question:</Text>
          <Icon name="caretdown" size={30} color="black" />
          {/* <AntDesign name="caretdown" size={30} color="black" /> */}
        </View>
        <Text style={styles.content}>This is your top question?</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Top Answer:</Text>
          <Icon name="caretdown" size={30} color="black" />
          {/* <AntDesign name="caretdown" size={30} color="black" /> */}
        </View>
        <Text style={styles.content}>This is your top Answer.</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};
// }
export default UserTopQuestionAnswer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    // backgroundColor: "#403d3d",
  },
  innerContainer: {
    marginBottom: 10,
  },
  rowContainer: {
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    // padding: 5,
    paddingRight: 10,
  },
  header: {
    // paddingLeft: 10,
    fontSize: 30,
    // borderWidth: 1,
  },
  content: {
    fontSize: 20,
    paddingLeft: 10,
  },
  footer: {
    marginBottom: 20,
  },
});
