import React, { useEffect } from "react";
import { View, Text, Dimensions, StyleSheet, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-community/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Ngrok from "../constants/Ngrok";

const GoogleSSOScreen = ({ navigation }) => {
  let authUserToken = null;
  let authUserData = null;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "428571631215-e11rkg17s9qilcj9hmqp9ml1p38sufcl.apps.googleusercontent.com",
    });
  });

  const handleServerData = async () => {
    try {
      await AsyncStorage.setItem("userToken", JSON.stringify(authUserToken));
      await AsyncStorage.setItem("userData", JSON.stringify(authUserData));
      navigation.navigate("MainApp");
    } catch (error) {
      console.log("Data Storage Error:", error);
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (!userInfo) {
        console.log("Data Found:", !userInfo);
      } else {
        fetch(`${Ngrok.url}/api/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            if (responseJson.access === true) {
              authUserToken = responseJson.token;
              authUserData = responseJson.user;
              handleServerData();
            } else {
              console.log(responseJson);
              Alert.alert("NineleapsStackOverFlow", "Access Denied");
            }
          })
          .catch((err) => {
            console.log("Server Error:", err);
          });
      }
    } catch (error) {
      if (error.message == "Sign in action cancelled") {
        Alert.alert("NineleapsStackOverFlow", "Sign-in cancelled");
      } else if (
        error.message == "A non-recoverable sign in failure occurred"
      ) {
        Alert.alert(
          "NineleapsStackOverFlow",
          "Sign-in with Nineleaps Email ID"
        );
      } else {
        console.log("Login Error:", error.message);
        Alert.alert("NineleapsStackOverFlow", "Something went wrong!");
      }
    }
  };

  return (
    <View style={styles.Container}>
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

export default GoogleSSOScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1def5",
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
