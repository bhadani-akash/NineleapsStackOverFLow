import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, ScrollView } from "react-native";
import { connect } from "react-redux";

import { viewProfile } from "../../redux/actions/viewProfileAction";

import UserDetails from "../myProfile/UserDetails";
import UserTagsSubscriptions from "../myProfile/UserTagsSubscriptions";
import Badge from "../myProfile/Badge";
import UserTopQuestionAnswer from "../myProfile/UserTopQuestionAnswer";
import UserTotalVotesQuestionAnswer from "../myProfile/UserTotalVotesQuestionAnswer";

const ViewProfile = ({ route, viewProfile, viewUserData }) => {
  // console.log(viewUserData);
  useEffect(() => {
    viewProfile(route.params.userId);
  }, []);

  if (viewUserData.loading === true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} animating={true} color={"black"} />
      </View>
    );
  } else if (viewUserData.viewProfileData._id != undefined) {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* {console.log(viewUserData.viewProfileData.name)} */}
        <UserDetails userData={viewUserData.viewProfileData} />
        <UserTotalVotesQuestionAnswer userData={viewUserData.viewProfileData} />
        <Badge />
        <UserTopQuestionAnswer userData={viewUserData.viewProfileData} />
        <UserTagsSubscriptions userData={viewUserData.viewProfileData} />
      </ScrollView>
    );
  } else if (viewUserData.loading === false && viewUserData.error != "") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Something went wrong!</Text>
        <Text>Get User Data Failed</Text>
        <Text>{viewUserData.error}</Text>
        {Alert.alert("Get User Data Error", viewUserData.error)}
      </View>
    );
  } else return null;
};

const mapStateToProps = (state) => {
  return {
    viewUserData: state.vieWProfileState,
  };
};

export default connect(mapStateToProps, { viewProfile })(ViewProfile);
