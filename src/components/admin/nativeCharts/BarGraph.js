import React from "react";
import { StyleSheet, ScrollView, View, Dimensions, Text } from "react-native";

import { BarChart } from "react-native-chart-kit";

const BarGraph = (props) => {
  // console.log(props);
  const element = [];
  for (let i = 0; i < Object.values(props.value).length; i++) {
    element[i] = (opacity = 1) => "#24a0ed";
  }
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              height: 13,
              width: 13,
              marginRight: 10,
              backgroundColor: "#24a0ed",
            }}
          />
          <Text>{props.xlabel}</Text>
        </View>
        <BarChart
          data={{
            labels: Object.keys(props.value),
            datasets: [
              {
                data: Object.values(props.value),
                colors: element,
              },
            ],
            //   legend: [props.legend],
          }}
          width={
            props.width == undefined
              ? Dimensions.get("window").width
              : Object.values(props.value).length * props.width
          }
          height={350}
          yAxisSuffix="  "
          fromZero={props.zero}
          withCustomBarColorFromData={true}
          flatColor={true}
          //   showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#fff",
            decimalPlaces: 0, // optional, defaults to 2dp
            data: [
              {
                data: Object.values(props.value),
                colors: element,
              },
            ],
            color: (opacity = 1) => "#24a0ed",
            labelColor: () => "#000000",
            propsForBackgroundLines: {
              strokeWidth: 1.5,
              stroke: "#24a0ed",
            },
            // strokeWidth: 10, // optional, default 3
            barPercentage: 1,
            // useShadowColorFromDataset: false, // optional
          }}
          // style={{ margin: 10 }}
          // yAxisLabel="$"
          // yAxisInterval={1}
          // verticalLabelRotation={30}
        />
        <Text>{props.xlabel}</Text>
      </View>
    </ScrollView>
  );
};

export default BarGraph;

const styles = StyleSheet.create({});
