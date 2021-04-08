import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { connect } from "react-redux";

import MainReport from "./MainReport";
import StatsReport from "./StatsReport";

import { adminCountData } from "../../redux/actions/admin/adminCountDataAction";

const AdminDashboard = ({ navigation, adminCountData, countData }) => {
  useEffect(() => {
    adminCountData();
  }, []);

  if (countData.loading === true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} animating={true} color={"black"} />
      </View>
    );
  } else {
    return (
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              fontSize: 20,
            }}
          >
            Welcome to your admin dashboard
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: 10,
            }}
          >
            <Button
              onPress={() =>
                navigation.navigate("Table", { data: countData.adminCountData })
              }
              title="Tables"
            />
            <Button
              onPress={() => navigation.navigate("Analytics")}
              title="Analytics"
            />
          </View>
        </View>
        <StatsReport data={countData.adminCountData} />
        <MainReport data={countData.adminCountData} />
      </ScrollView>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    countData: state.adminCountDataState,
  };
};

export default connect(mapStateToProps, { adminCountData })(AdminDashboard);

const styles = StyleSheet.create({});
