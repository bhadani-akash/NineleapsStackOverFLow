import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";

import Header from "../../components/Header";

import { inAppNotification } from "../../redux/actions/notification/inAppNotificationAction";

const NotificationHome = ({ inAppNotification, notiData }) => {
  //   console.log(notiData);
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
        id == null ? null : inAppNotification(id);
      }
    }, [id])
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>You are on Notification Screen</Text>
      </View>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    notiData: state.inAppNotificationState,
  };
};
export default connect(mapStateToProps, { inAppNotification })(
  NotificationHome
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#b6ff5c",
  },
});
