import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";

import { adminAnalyticsData } from "../../redux/actions/admin/adminAnalyticsDataAction";
import BarGraph from "./graphs/BarGraph";
import LineGraph from "./graphs/LineGraph";
import PieGraph from "./graphs/PieGraph";
import VictoryBarGraph from "./victory/VictoryBarGraph";

const AdminAnalytics = ({ adminAnalyticsData, analyticsData }) => {
  console.log(analyticsData);
  const [graph, setGraph] = useState();
  const [data, setData] = useState();
  const [duration, setDuration] = useState();
  const [tags, setTags] = useState([]);
  const [state, setState] = useState();

  useEffect(() => {
    console.log("yd jgu");
    adminAnalyticsData();
  }, []);
  console.log(analyticsData.adminAnalyticsData.dayques);
  if (Object.keys(analyticsData.adminAnalyticsData).length == 0) {
    return <Text>no data</Text>;
  }

  const submitHandler = () => {
    if (data == "Question") {
      if (graph == "Bar") {
        if (duration == "Daily") {
        }
      }
    } else {
    }
  };
  return (
    <View style={{ margin: 10 }}>
      <DropDownPicker
        items={[
          { label: "Bar", value: "Bar" },
          { label: "Pie", value: "Pie" },
          { label: "Line", value: "Line" },
        ]}
        placeholder="Select Graph"
        containerStyle={{
          height: 40,
          marginBottom: 10,
        }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          setGraph(item.value);
        }}
      />
      <DropDownPicker
        items={[
          { label: "Question", value: "Question" },
          { label: "Answer", value: "Answer" },
        ]}
        placeholder="Select Data"
        containerStyle={{
          height: 40,
          marginBottom: 10,
        }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          setData(item.value);
        }}
      />

      <DropDownPicker
        items={[
          { label: "Daily", value: "Daily" },
          { label: "Monthly", value: "Monthly" },
          { label: "Yearly", value: "Yearly" },
        ]}
        placeholder="Select Duration"
        containerStyle={{
          height: 40,
          marginBottom: 10,
        }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          setDuration(item.value);
        }}
      />
      <DropDownPicker
        items={[
          { label: "abc", value: "abc" },
          { label: "bcd", value: "bcd" },
          { label: "cde", value: "cde" },
        ]}
        placeholder="Select Tags"
        defaultValue="abc"
        multiple={true}
        containerStyle={{
          height: 40,
          marginBottom: 10,
        }}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          setTags(item.value);
        }}
      />
      <Button title="Submit" onPress={() => submitHandler} />
      {/* <BarGraph /> */}
      {/* <LineGraph value={analyticsData.adminAnalyticsData.dayques} /> */}
      {/* <PieGraph /> */}
      <VictoryBarGraph />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    analyticsData: state.adminAnalyticsDataState,
  };
};

export default connect(mapStateToProps, { adminAnalyticsData })(AdminAnalytics);

const styles = StyleSheet.create({});
