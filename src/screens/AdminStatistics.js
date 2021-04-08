import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";

// import DatePicker from "react-native-modern-datepicker";
import { connect } from "react-redux";
import MainReport from "../components/admin/MainReport";
import StatsReport from "../components/admin/StatsReport";

import { adminCountData } from "../redux/actions/admin/adminCountDataAction";

const AdminStatistics = ({ countData, adminCountData }) => {
  // const [selectedDate, setSelectedDate] = useState("");
  useEffect(() => {
    adminCountData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c1def5",
          height: 70,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Admin Statstics
        </Text>
        <Text>Welcome to your admin dashboard</Text>
      </View>
      {countData.loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} animating={true} color={"black"} />
        </View>
      ) : (
        <ScrollView>
          <StatsReport data={countData.adminCountData} />
          <MainReport data={countData.adminCountData} />
        </ScrollView>
      )}
      {/* <DatePicker
        onSelectedChange={(date) => {
          setSelectedDate(date);
          console.log(selectedDate);
        }}
      /> */}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    countData: state.adminCountDataState,
  };
};

export default connect(mapStateToProps, { adminCountData })(AdminStatistics);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#ff9e3d",
  },
});
