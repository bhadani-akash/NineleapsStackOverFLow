import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatsReport = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        margin: 10,
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 25, padding: 10 }}>Statistics and Summary</Text>
      <View style={styles.countCard}>
        <Text style={styles.cardHeader}>Total Questions</Text>
        <Text style={styles.cardData}>{props.data.totalques}</Text>
      </View>
      <View style={styles.countCard}>
        <Text style={styles.cardHeader}>Total Answers</Text>
        <Text style={styles.cardData}>{props.data.totalans}</Text>
      </View>
      <View style={styles.countCard}>
        <Text style={styles.cardHeader}>Total Tags</Text>
        <Text style={styles.cardData}>{props.data.totaltags}</Text>
      </View>
      <View style={styles.countCard}>
        <Text style={styles.cardHeader}>Total Users</Text>
        <Text style={styles.cardData}>{props.data.totaluser}</Text>
      </View>
    </View>
  );
};

export default StatsReport;

const styles = StyleSheet.create({
  countCard: {
    backgroundColor: "#D1ECF1",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height: 80,
    paddingVertical: 10,
  },
  cardHeader: {
    fontSize: 20,
    paddingBottom: 10,
  },
  cardData: {
    fontSize: 25,
  },
});
