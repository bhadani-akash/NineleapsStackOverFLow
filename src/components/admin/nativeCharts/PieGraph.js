import React from "react";
import { StyleSheet, ScrollView, View, Dimensions, Text } from "react-native";

import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const PieGraph = (props) => {
  var label = Object.keys(props.value);
  var value = Object.values(props.value);
  var randomColor = require("randomcolor");

  var data = [];
  for (var i = 0; i < value.length; i++) {
    data[i] = {
      name: label[i],
      val: value[i],
      color: randomColor({
        // luminosity: "light", //light,bright/dark
        // hue: "random",
      }),
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    };
  }

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <ScrollView horizontal={true} style={{ backgroundColor: "#fff" }}>
      <PieChart
        data={data}
        width={600}
        height={350}
        chartConfig={chartConfig}
        // accessor={"population"}
        accessor={"val"}
        backgroundColor={"transparent"}
        paddingLeft={"30"}
        // center={[10, 50]}
        // hasLegend={false}
        // style={{ backgroundColor: "pink" }}
        // absolute
      />
    </ScrollView>
  );
};

export default PieGraph;

const styles = StyleSheet.create({});
