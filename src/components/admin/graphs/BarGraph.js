import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BarChart, YAxis, Grid } from "react-native-svg-charts";

const BarGraph = () => {
  const contentInset = { top: 30, bottom: 30 };
  const fill = "rgb(134, 65, 244)";
  const data = [50, 10, 40, 95, 85, 0, 35, 53, 24, 50];
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "#fff",
      }}
    >
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: "grey",
          fontSize: 10,
        }}
        // numberOfTicks={10}
        formatLabel={(value, index) => index}
      />
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={contentInset}
      >
        <Grid />
      </BarChart>
    </View>
  );
};

export default BarGraph;

const styles = StyleSheet.create({});
