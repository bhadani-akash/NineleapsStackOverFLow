import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserTotalVotesQuestionAnswer = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.block}>
        {props.userData.totalquestion ? (
          <Text style={Styles.data}>{props.userData.totalquestion}</Text>
        ) : (
          <Text style={Styles.data}>0</Text>
        )}
        <Text style={Styles.label}>Questions Asked</Text>
      </View>

      <View style={Styles.block}>
        {props.userData.totalvotes ? (
          <Text style={Styles.data}>{props.userData.totalvotes}</Text>
        ) : (
          <Text style={Styles.data}>0</Text>
        )}
        <Text style={Styles.label}>Total Votes</Text>
      </View>

      <View style={Styles.block}>
        {props.userData.totalanswer ? (
          <Text style={Styles.data}>{props.userData.totalanswer}</Text>
        ) : (
          <Text style={Styles.data}>0</Text>
        )}
        <Text style={Styles.label}>Questions Answered</Text>
      </View>
    </View>
  );
};
export default UserTotalVotesQuestionAnswer;

const Styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    // flexDirection: "column",
    flexDirection: "row",
    // backgroundColor: "#5e5c5c",
    // backgroundColor: "aqua",
  },
  // rowContainer: {
  //   // flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 10,
  // },
  block: {
    flex: 1,
    // borderColor: "black",
    // borderWidth: 1,
    // margin: 5,
    // backgroundColor: "#5e5c5c",
  },
  label: {
    fontSize: 13,
    textAlign: "center",
  },
  data: {
    textAlign: "center",
    // paddingLeft: 10,
    // paddingRight: 5,
    fontSize: 30,
    // backgroundColor: "white",
    // borderColor: "black",
    // borderWidth: 1,
  },
});
