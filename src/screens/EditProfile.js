import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Platform,
  Image,
} from "react-native";
// import ImagePicker from "react-native-image-crop-picker";

const EditProfile = () => {
  const PickImage = () => {
    ImagePicker.openPicker({
      width: 120,
      height: 120,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  // render() {
  return (
    <View style={styles.container}>
      {/* <View style={{ alignItems: "center" }}> */}
      <Text style={styles.heading}>Edit Profile</Text>
      {/* </View> */}
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Name</Text>
        <TextInput style={styles.textField} placeholder="Enter your Name" />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Designation</Text>
        <TextInput
          style={styles.textField}
          placeholder="Enter your Designation"
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bio</Text>
        <TextInput
          style={styles.textField}
          multiline={true}
          placeholder="Write a short bio."
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add your Profile Image:</Text>
        <Button
          title="Choose Image"
          onPress={() => PickImage()}
          //   color="#841584"
        />
        {/* {image && (
          <Image soure={{ uri: image }} style={{ width: 100, height: 100 }} />
        )} */}
      </View>
    </View>
  );
};
// }
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 50,
    textAlign: "center",
    // backgroundColor: "pink",
  },
  innerContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 23,
    paddingBottom: 5,
    // backgroundColor: "grey",
  },
  headingImage: {
    // flex: 1,
    fontSize: 25,
    paddingBottom: 5,
  },
  textField: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    borderColor: "black",
    borderBottomWidth: 1,
    // backgroundColor: "white",
  },
  // textArea: {
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   fontSize: 20,
  //   // marginBottom: 100,
  //   backgroundColor: "white",
  //   borderColor: "black",
  //   borderWidth: 1,
  // },
  //   container: {
  //     backgroundColor: "#5E5C5C",
  //     paddingTop: 20,
  //     paddingBottom: 20,
  //     paddingEnd: 30,
  //     padding: 10,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //   },
  //   totalVotes: {
  //     height: 40,
  //     borderColor: "gray",
  //     borderWidth: 1,
  //   },
});
// import React, { Component } from "react";
// import { Text, StyleSheet, View, TextInput } from "react-native";
// export default class EditProfileScreen extends Component {
//   render() {
//     return (
//       <View style={Styles.root}>
//         <Text style={Styles.heading}>Edit Profile</Text>
//         <Text style={Styles.innerContainerHeading}>Name</Text>
//         <TextInput style={Styles.textInput} placeholder="Enter Full Name" />
//         <Text style={Styles.innerContainerHeading}>Designation</Text>
//         <TextInput
//           style={Styles.textInput}
//           placeholder="Enter your Designation"
//         />
//         <Text style={Styles.innerContainerHeading}>Bio:</Text>
//         <TextInput style={Styles.textInput} placeholder="Write a Short Bio." />
//       </View>
//     );
//   }
// }
// const Styles = StyleSheet.create({
//   container: {
//     // padding: 10,
//   },
//   heading: {
//     paddingTop: 20,
//     paddingBottom: 30,
//     // backgroundColor: "blue",
//     // justifyContent: "center",
//     // flex: 1,
//     // alignItems: "center",
//   },
//   innerContainer: {
//     backgroundColor: "pink",
//     // padding: 20,
//   },
//   innerContainerHeading: {
//     fontSize: 30,
//     padding: 10,
//   },
//   textInput: {
//     // padding: 10,
//     borderWidth: 2,
//   },
// });
