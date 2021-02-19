import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";

import Ngrok from "../constants/Ngrok";

const GoogleSSOScreen = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "428571631215-e11rkg17s9qilcj9hmqp9ml1p38sufcl.apps.googleusercontent.com",
      // iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  });
  //   , []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (!userInfo) {
        console.log("Data Found:", !userInfo);
      } else {
        // console.log("Data:", userInfo);
        console.log("Logged-in:", userInfo.user.name);

        fetch(`${Ngrok.url}/api/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => {
            // console.log(response);
            return response.json();
          })
          .then((responseJson) => {
            console.log(responseJson);
            if (responseJson.access == true) {
              //alert("Login Sucessful")
              console.log("Navigation success");
            } else {
              alert("Login failed");
            }
            // navigation.navigate("App");
          })
          .catch((err) => {
            console.log("Server Error:", err);
          });
      }
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  // render() {
  return (
    <View style={styles.Container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/logo.jpg")}
          style={styles.logo}
          resizeMode="center"
        />
        <Text style={styles.name}>NineleapsStackOverFlow</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Learn and Share platform for Nineleaps</Text>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => googleLogin()}
        />
      </Animatable.View>
    </View>
  );
};
// }

export default GoogleSSOScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 100,
  },
  name: {
    fontSize: 25,
    marginTop: 50,
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
});
