// import React from "react";
// import { StyleSheet, Text, View, Dimensions } from "react-native";

// import {
//   Grid,
//   LineChart,
//   BarChart,
//   XAxis,
//   YAxis,
// } from "react-native-svg-charts";

// const LineGraph = (props) => {
//   const { width, height } = Dimensions.get("window");

//   //   console.log(props);
//   const abc = Object.values(props.value);
//   console.log(abc);
//   const def = Object.keys(props.value);
//   console.log(def);

//   const data = [50, 10, 40, 95, 85, 91, 35, 53, 0, 24, 50];

//   const axesSvg = { fontSize: 10, fill: "grey" };
//   const verticalContentInset = { top: 10, bottom: 10 };
//   const xAxisHeight = 30;
//   return (
//     <View
//       style={{
//         // height: 250,
//         height: "50%",
//         width: "100%",
//         paddingVertical: 20,
//         flexDirection: "row",
//         // backgroundColor: "red",
//       }}
//     >
//       <YAxis
//         // data={data}
//         data={abc}
//         style={{ marginBottom: xAxisHeight }}
//         contentInset={verticalContentInset}
//         // contentInset={{ left: 25, right: 25 }}
//         svg={axesSvg}
//       />
//       <View
//         style={{
//           flex: 1,
//           marginLeft: 10,
//         }}
//       >
//         <BarChart
//           style={{ flex: 1 }}
//           //   data={data}
//           data={abc}
//           contentInset={verticalContentInset}
//           //   contentInset={{ left: 25, right: 25 }}
//           svg={{
//             //   stroke: "rgb(134, 65, 244)"
//             fill: "rgb(134, 65, 244)",
//           }}
//           //   yMin={0}
//         >
//           <Grid />
//         </BarChart>
//         <View style={{ height: 50, backgroundColor: "lightgrey" }}>
//           <XAxis
//             style={
//               {
//                 // backgroundColor: "pink",
//                 //   marginHorizontal: 0,
//                 // marginTop: 20,
//                 // marginHorizontal: 50,
//                 // height: xAxisHeight,
//                 //   height: 80,
//               }
//             }
//             data={abc}
//             // data={def}
//             formatLabel={(value, index) => {
//               console.log(index);
//               return def[index];
//             }}
//             //   formatLabel={(value, index) => index}
//             //   formatLabel={(def) => def}
//             // contentInset={{ left: 10, right: 10 }}
//             //   contentInset={{ top: 59, left: 25, right: 25 }}
//             // contentInset={{ height: 60 }}
//             //   contentInset={{ top: 30, bottom: 30, left: 10, right: 10 }}
//             svg={{
//               // backgroundColor: "pink",
//               // paddingTop: 10,
//               fontSize: 10,
//               fill: "grey",
//               rotation: 90,
//               // y: 15,
//               //   x: 30,
//             }}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LineGraph;

// const styles = StyleSheet.create({});
