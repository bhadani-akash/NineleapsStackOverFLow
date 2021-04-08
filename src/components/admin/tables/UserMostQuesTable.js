import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

const UserMostQuesTable = (props) => {
  const rowComponent = ({ item }) => (
    <View
      style={{ backgroundColor: "#fff", flexDirection: "row", minHeight: 40 }}
    >
      <Text
        style={{
          // flex: 3,
          width: 150,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
          padding: 5,
        }}
        // numberOfLines={5}
      >
        {item.name}
      </Text>
      <Text
        style={{
          // flex: 1,
          width: 100,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.designation}
      </Text>
      <Text
        style={{
          // flex: 1,
          width: 100,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
          padding: 5,
        }}
      >
        {item.shortbio}
      </Text>
      <Text
        style={{
          // flex: 1,
          width: 100,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.totalquestion ? item.totalquestion : 0}
      </Text>
    </View>
  );
  return (
    <View style={{ marginHorizontal: 10, marginBottom: 20, flex: 1 }}>
      <Text style={{ fontSize: 25, paddingBottom: 10 }}>
        Users who Question most
      </Text>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flexDirection: "row", backgroundColor: "black" }}>
            <Text
              style={{
                // flex: 3,
                width: 150,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Name
            </Text>
            <Text
              style={{
                // flex: 1,
                width: 100,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Designation
            </Text>
            <Text
              style={{
                // flex: 1,
                width: 100,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Bio
            </Text>
            <Text
              style={{
                // flex: 1,
                width: 100,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Questions Asked
            </Text>
          </View>
          <FlatList
            data={props.data}
            keyExtractor={(item) => item._id.toString()}
            renderItem={rowComponent}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserMostQuesTable;

const styles = StyleSheet.create({});
