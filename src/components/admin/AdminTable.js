import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";

import TopVotedQuestionTable from "./tables/TopVotedQuestionTable";
import TopVotedAnswerTable from "./tables/TopVotedAnswerTable";
import ActiveTagsTable from "./tables/ActiveTagsTable";
import UserMostQuesTable from "./tables/UserMostQuesTable";
import UserMostAnsTable from "./tables/UserMostAnsTable";

const AdminTable = ({ route }) => {
  // console.log(route.params.data);

  const [tableName, setTableName] = useState("Top Voted Questions");
  return (
    <View style={{ flex: 1 }}>
      <DropDownPicker
        items={[
          { label: "Top Voted Questions", value: "Top Voted Questions" },
          { label: "Top Voted Answers", value: "Top Voted Answers" },
          { label: "Most Active Tags", value: "Most Active Tags" },
          {
            label: "User with Maximum Questions",
            value: "User with Maximum Questions",
          },
          {
            label: "User with Maximum Answers",
            value: "User with Maximum Answers",
          },
        ]}
        defaultValue={tableName}
        containerStyle={{
          height: 40,
          marginVertical: 10,
          marginHorizontal: 40,
        }}
        dropDownMaxHeight={200}
        style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) => {
          setTableName(item.value);
        }}
      />

      {tableName == "Top Voted Questions" ? (
        <TopVotedQuestionTable data={route.params.data.topvotedques} />
      ) : null}
      {tableName == "Top Voted Answers" ? (
        <TopVotedAnswerTable data={route.params.data.topvotedans} />
      ) : null}
      {tableName == "Most Active Tags" ? (
        <ActiveTagsTable data={route.params.data.activetag} />
      ) : null}
      {tableName == "User with Maximum Questions" ? (
        <UserMostQuesTable data={route.params.data.mostques} />
      ) : null}
      {tableName == "User with Maximum Answers" ? (
        <UserMostAnsTable data={route.params.data.mostans} />
      ) : null}
    </View>
  );
};

export default AdminTable;

const styles = StyleSheet.create({});
