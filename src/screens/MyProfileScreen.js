import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, ActivityIndicator, Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

import { userProfile } from "../redux/actions/userProfileAction";

import Header from "../components/Header";
import UserDetails from "../components/myProfile/UserDetails";
import UserTotalVotesQuestionAnswer from "../components/myProfile/UserTotalVotesQuestionAnswer";
import Badge from "../components/myProfile/Badge";
import UserTopQuestionAnswer from "../components/myProfile/UserTopQuestionAnswer";
import UserTagsSubscriptions from "../components/myProfile/UserTagsSubscriptions";

import { useFocusEffect } from "@react-navigation/native";

const MyProfileScreen = ({ userProfile, userData, updatedUserProfileData }) => {
  // console.log(userData);
  const [id, setId] = useState();
  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        try {
          let ckeckData = await AsyncStorage.getItem("userData");
          ckeckData = JSON.parse(ckeckData);
          setId(ckeckData._id);
        } catch (e) {
          console.log("Display User Data Error:", e);
        }
      };
      getData();
      {
        id == null ? null : userProfile(id);
      }
    }, [id, updatedUserProfileData])
  );

  if (userData.loading === true && userData.userProfileData._id == undefined) {
    return (
      <>
        <Header />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} animating={true} color={"black"} />
        </View>
      </>
    );
  } else if (userData.userProfileData._id != undefined) {
    return (
      <>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            // backgroundColor: "#74f7d0",
            backgroundColor: "white",
          }}
        >
          <UserDetails userData={userData.userProfileData} />
          <UserTotalVotesQuestionAnswer userData={userData.userProfileData} />
          <Badge />
          <UserTopQuestionAnswer userData={userData.userProfileData} />
          <UserTagsSubscriptions userData={userData.userProfileData} />
        </ScrollView>
      </>
    );
  } else if (userData.loading === false && userData.error != "") {
    return (
      <>
        <Header />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Something went wrong!</Text>
          <Text>Get User Data Failed</Text>
          <Text>{userData.error}</Text>
          {Alert.alert("Get User Profile Data Error", userData.error)}
        </View>
      </>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    userData: state.userProfileState,
    updatedUserProfileData: state.userProfileState.updatedUserProfileData,
  };
};

export default connect(mapStateToProps, { userProfile })(MyProfileScreen);
