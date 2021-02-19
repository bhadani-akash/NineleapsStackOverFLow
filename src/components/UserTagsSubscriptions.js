import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

// export default class UserTagsSubs extends React.Component {

// render() {

const UserTagsSubscriptions = () => {
  //   const myIcon = <Icon name="stack-overflow" size={30} color="#900" />;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Tags Associated:</Text>
          <Icon name="caretdown" size={30} color="black" />
        </View>
        <Text style={styles.content}>#react #reactnative #node #express</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>My Subscriptions:</Text>
          <Icon name="caretdown" size={30} color="black" />
          {/* <AntDesign name="caretdown" size={30} color="black" /> */}
        </View>
        <Text style={styles.content}>#reactnative</Text>
      </View>
      <View style={styles.footer} />
      {/* <Text style={{ padding: 50, backgroundColor: "white" }} /> */}
    </View>
  );
};
// }
export default UserTagsSubscriptions;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    // backgroundColor: "#2b2828",
  },
  innerContainer: {
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    padding: 20,
  },
});
