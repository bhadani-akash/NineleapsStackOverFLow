import React from "react";
import { StyleSheet, ScrollView, Dimensions, View, Text } from "react-native";

import { LineChart } from "react-native-chart-kit";

const LineGraph = (props) => {
  console.log(props);
  return (
    <ScrollView
      horizontal={true}
      style={{
        backgroundColor: "#fff",
        // marginHorizontal: 10,
        marginBottom: 20,
        paddingBottom: 20,
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <Text style={{ transform: [{ rotate: "-90deg" }] }}>
          {props.ylabel}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <LineChart
          data={{
            labels: Object.keys(props.value),
            datasets: [
              {
                data: Object.values(props.value),
                strokeWidth: 1,
                color: () => "#24a0ed",
              },
            ],
            legend: [props.legend],
          }}
          width={
            props.width == undefined
              ? Dimensions.get("window").width
              : Object.values(props.value).length * props.width
          }
          height={350}
          // yAxisLabel="$"
          yAxisSuffix="      "
          // yAxisInterval={1} // optional, defaults to 1
          fromZero={props.zero}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            fillShadowGradient: "#24a0ed",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "#24a0ed",
            },
            propsForBackgroundLines: {
              strokeWidth: 1.5,
              stroke: "#24a0ed",
            },
          }}
          bezier
          // style={{
          //   margin: 10,
          // }}
        />
        <Text>{props.xlabel}</Text>
      </View>
    </ScrollView>
  );
};

export default LineGraph;

const styles = StyleSheet.create({});
