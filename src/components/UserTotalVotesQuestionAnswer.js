import React, {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserTotalVotesQuestionAnswer = (/*{Children}*/) => {
  // export default class UserTotalVQA extends React.Component {
  user = {
    totalVotes: <Text>50</Text>,
    totalQuestions: <Text>10</Text>,
    totalAnswers: <Text>20</Text>,
  };
  // render() {
  return (
    <View style={Styles.container}>
      {/* {Children} */}
      <View style={Styles.rowContainer}>
        <Text style={Styles.text}>Total Votes:</Text>
        <Text style={Styles.textOutput}>{user.totalVotes}</Text>
      </View>
      <View style={Styles.rowContainer}>
        <Text style={Styles.text}>Total Questions:</Text>
        <Text style={Styles.textOutput}>{user.totalQuestions}</Text>
      </View>
      <View style={Styles.rowContainer}>
        <Text style={Styles.text}>Total Answers:</Text>
        <Text style={Styles.textOutput}>{user.totalAnswers}</Text>
      </View>
    </View>
  );
};
export default UserTotalVotesQuestionAnswer;

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'column',
    // backgroundColor: "#5e5c5c",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
  },
  textOutput: {
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
  },
});
