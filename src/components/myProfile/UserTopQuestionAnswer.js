import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserTopQuestionAnswer = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Top Question:</Text>
        </View>
        {props.userData.TopQuestion ? (
          <Text style={styles.content}>
            {props.userData.TopQuestion.question}
          </Text>
        ) : (
          <Text style={styles.content}>No Top Question available.</Text>
        )}
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Top Answer:</Text>
        </View>
        {props.userData.TopAnswer ? (
          <Text style={styles.content}>{props.userData.TopAnswer.text}</Text>
        ) : (
          <Text style={styles.content}>No Top Answer available.</Text>
        )}
      </View>
    </View>
  );
};

export default UserTopQuestionAnswer;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    // backgroundColor: "#403d3d",
  },
  innerContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    // marginBottom: 10,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    borderBottomWidth: 1,
    // padding: 5,
    // paddingRight: 10,
  },
  header: {
    // paddingLeft: 10,
    fontSize: 25,
    // borderWidth: 1,
  },
  content: {
    paddingTop: 10,
    fontSize: 18,
    // paddingLeft: 10,
  },
});
