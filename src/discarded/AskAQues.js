// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   StyleSheet,
//   TextInput,
//   View,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch } from "react-redux";

// import { addpost } from "../../redux/actions/posts/postActions";

// const AskAQues = () => {
//   const [user, setUser] = useState();
//   const [qstn, setQuestion] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         let jsonValue = await AsyncStorage.getItem("userData");
//         jsonValue = JSON.parse(jsonValue);
//         // console.log("Stored user", jsonValue);
//         setUser(jsonValue);
//       } catch (e) {
//         console.log("Display User Data Error:", e);
//       }
//     };
//     getData();
//   }, []);

//   const submitQuestionToServer = () => {
//     if (qstn == "") {
//       Alert.alert("Ask a Question?", "Question can't be empty!");
//     } else {
//       const data = {
//         user: user,
//         question: qstn,
//       };
//       dispatch(addpost(data));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <TextInput
//           style={styles.askaquestion}
//           placeholder="Ask a Question?"
//           multiline={true}
//           value={qstn}
//           onChangeText={(qstn) => setQuestion(qstn)}
//         />
//         <TouchableOpacity
//           onPress={() => {
//             submitQuestionToServer();
//           }}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>POST</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default AskAQues;

// const styles = StyleSheet.create({
//   container: {
//     minHeight: 100,
//     margin: 10,
//     // height: 100,
//     // width: "100%",
//     // backgroundColor: "pink",
//     // justifyContent: "space-between",
//   },
//   innerContainer: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     // backgroundColor: "grey",
//   },
//   askaquestion: {
//     minHeight: 100,
//     maxHeight: 250,
//     flex: 3,
//     paddingHorizontal: 10,
//     // backgroundColor: "lightgrey",
//     // backgroundColor: "#d6d6d6",
//     // backgroundColor: "#ededed",
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "black",
//     marginRight: 5,
//     fontSize: 20,
//     // borderRadius: 10,
//   },
//   button: {
//     height: 100,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // backgroundColor: "#0895cc",
//     backgroundColor: "#9eaaad",
//     borderWidth: 1,
//     borderColor: "black",
//     marginLeft: 5,
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "black",
//   },
// });
