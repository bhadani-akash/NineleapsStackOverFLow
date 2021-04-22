import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
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
          backgroundColor: "#fff",
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
            Welcome to your Admin Dashboard
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{ borderWidth: 1 }}
              onPress={() =>
                navigation.navigate("Table", { data: countData.adminCountData })
              }
            >
              <ImageBackground
                source={require("../../assets/Table.png")}
                style={{
                  height: 70,
                  width: 150,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  TABLES
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 1 }}
              onPress={() => navigation.navigate("Analytics")}
            >
              <ImageBackground
                source={require("../../assets/Graph.jpg")}
                style={{
                  height: 70,
                  width: 150,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  ANALYTICS
                </Text>
              </ImageBackground>
            </TouchableOpacity>
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
