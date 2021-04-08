import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from "react-native-image-crop-picker";
import Entypo from "react-native-vector-icons/Entypo";

import { connect } from "react-redux";
import { updateUserProfile } from "../redux/actions/userProfileAction";

const EditProfile = ({ updateUserProfile, navigation }) => {
  let authUserData = null;
  const [id, setId] = useState();
  const [designation, setDesignation] = useState();
  const [bio, setBio] = useState();
  const [pickImg, setPickImg] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem("userData");
        jsonValue = JSON.parse(jsonValue);
        setId(jsonValue._id);
      } catch (e) {
        console.log("Display User Data Error:", e);
      }
    };
    getData();
  }, [id]);

  const goToPickImage = () => {
    ImagePicker.openPicker({
      width: 120,
      height: 120,
      cropping: true,
      includeBase64: true,
    })
      .then((image) => {
        setPickImg(`data:${image.mime};base64,${image.data}`);
      })
      .catch((error) => {
        console.log("Image selection error:", error);
      });
  };

  // const handleServerData = async () => {
  //   try {
  //     await AsyncStorage.setItem("userData", JSON.stringify(authUserData));
  //     // setName();
  //     setDesignation();
  //     setBio();
  //     setPickImg();
  //     Alert.alert("Edit Profile", "Profile Updated!");
  //     navigation.goBack();
  //   } catch (error) {
  //     console.log("Data Storage Error:", error);
  //   }
  // };

  const submitDataToServer = () => {
    const data = {
      designation: designation,
      shortbio: bio,
      photo: pickImg,
    };
    updateUserProfile(id, data);
    setDesignation();
    setBio();
    setPickImg();
    Alert.alert("Edit Profile", "Profile Updated!");
    navigation.goBack();
    // fetch(`${Ngrok.url}/api/users/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // name: name,
    //     designation: designation,
    //     shortbio: bio,
    //     photo: pickImg,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log("ser res", responseJson);
    //     authUserData = responseJson;
    //     handleServerData();
    //   })
    //   .catch((err) => {
    //     console.log("Set User Data Failed:", err);
    //   });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headingContainer}>
        <TouchableOpacity
          onPress={() => {
            // setName();
            setDesignation();
            setBio();
            setPickImg();
            // Alert.alert("Edit Profile", "Cancelled");
            navigation.goBack();
          }}
        >
          <Entypo name="cross" size={60} color="black" style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.heading}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            if ((designation || bio || pickImg) == undefined) {
              Alert.alert("Edit Profile", "Feilds can't be empty.");
            } else {
              submitDataToServer();
            }
          }}
        >
          <Entypo name="check" size={50} color="black" style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Designation</Text>
        <TextInput
          style={styles.textField}
          autoCapitalize="characters"
          placeholder="Enter your Designation"
          value={designation}
          onChangeText={(designation) => setDesignation(designation)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bio</Text>
        <TextInput
          style={styles.textField}
          multiline={true}
          autoCapitalize="sentences"
          placeholder="Write a short bio."
          value={bio}
          onChangeText={(bio) => setBio(bio)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Select Profile Image</Text>
        <Button title="Choose Image" onPress={() => goToPickImage()} />
        {pickImg == undefined ? null : (
          <View style={styles.showImgContainer}>
            <Text style={{ paddingBottom: 10 }}>Selected Image:</Text>
            <Image source={{ uri: pickImg }} style={styles.showImg} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default connect(null, { updateUserProfile })(EditProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  headingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "cyan",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    // color: "grey",
    // backgroundColor: "pink",
  },
  logo: {
    // backgroundColor: "grey",
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
  showImg: {
    height: 240,
    width: 240,
  },
  showImgContainer: {
    paddingVertical: 20,
    alignItems: "center",
    // backgroundColor: "yellow",
  },
});
