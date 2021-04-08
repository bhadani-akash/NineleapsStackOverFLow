// import React, { useState } from "react";
// import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import moment from "moment";
// import { useNavigation } from "@react-navigation/native";

// const TagFeedCard = (props) => {
//   //   const [modal, setModal] = useState(false);
//   // console.log("Inside Ques:", props.data.item.tags);
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           <Ionicons name="person" size={14} color="black" />
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate("ViewProfile", {
//                 userId: props.data.item.user._id,
//               })
//             }
//             // onPress={() => navigation.navigate("Profile")}
//           >
//             <Text style={{ paddingLeft: 5 }}>{props.data.item.user.name}</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.headerRight}>
//           <Text>Posted: {moment(props.data.item.createdAt).fromNow()}</Text>
//         </View>
//       </View>
//       <View style={styles.body}>
//         <View style={styles.question}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("TagPost", {
//                 questionId: props.data.item._id,
//               });
//             }}
//           >
//             <Text numberOfLines={3}>Q: {props.data.item.question}</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {props.data.item.tags == undefined ? null : (
//         <View
//           style={{
//             backgroundColor: "white",
//             // borderTopWidth: 1,
//             // borderTopColor: "#9eaaad",
//             // alignItems: "center",
//             paddingVertical: 5,
//             paddingHorizontal: 5,
//           }}
//         >
//           <Text
//             style={
//               {
//                 // backgroundColor: "lightgrey",
//               }
//             }
//           >
//             Tags: {props.data.item.tags}
//           </Text>
//         </View>
//       )}
//       <View style={styles.footer}>
//         <Text>{props.data.item.answers.length} Answers</Text>
//         <Text>{props.data.item.voters.length} Votes</Text>
//       </View>
//     </View>
//   );
// };

// export default TagFeedCard;

// const styles = StyleSheet.create({
//   container: {
//     // height: 100,
//     padding: 5,
//     marginHorizontal: 10,
//     // backgroundColor: "#fff",
//     // backgroundColor: "#9adbed",
//     // backgroundColor: "#bfe364",
//     // backgroundColor: "#fac0c0",
//     // backgroundColor: "#dbd3d3",
//     backgroundColor: "#9eaaad",
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   header: {
//     // flex: 1,
//     // height: 30,
//     flexDirection: "row",
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     justifyContent: "space-between",
//     // borderBottomWidth: 1,
//     // borderBottomColor: "grey",
//     // backgroundColor: "aqua",
//   },
//   headerLeft: {
//     flexDirection: "row",
//     // justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "blue",
//   },
//   headerRight: {
//     // backgroundColor: "red",
//   },
//   body: {
//     // flex: 3,
//     flexDirection: "row",
//     // padding: 5,
//     justifyContent: "space-between",
//     height: 60,
//     // backgroundColor: "coral",
//   },
//   question: {
//     paddingHorizontal: 5,

//     flex: 1,
//     justifyContent: "center",
//     // alignItems: "center",
//     // backgroundColor: "pink",
//     backgroundColor: "#fff",
//     // borderBottomLeftRadius: 10,
//     // borderBottomRightRadius: 10,
//   },
//   // bodyBtn: {
//   //   paddingHorizontal: 5,
//   //   paddingTop: 13,
//   //   // justifyContent: "center",
//   //   // backgroundColor: "grey",
//   //   backgroundColor: "#fff",
//   //   borderBottomRightRadius: 10,
//   // },
//   // upVoteBtn: {
//   //   height: 20,
//   //   // borderRadius: 5,
//   //   // borderBottomWidth: 1,
//   //   // borderBottomColor: "grey",
//   //   // backgroundColor: "#0895cc",
//   // },
//   footer: {
//     borderTopWidth: 1,
//     borderTopColor: "#9eaaad",
//     backgroundColor: "white",
//     flexDirection: "row",
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     justifyContent: "space-between",
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//   },
// });
