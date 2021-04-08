import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ActiveTagsTable = (props) => {
  const rowComponent = ({ item }) => (
    <View style={{ backgroundColor: "#fff", flexDirection: "row", height: 40 }}>
      <Text
        style={{
          flex: 2,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.tags}
      </Text>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.questions.length}
      </Text>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.user.length}
      </Text>
    </View>
  );
  return (
    <View style={{ marginHorizontal: 10, marginBottom: 20, flex: 1 }}>
      <Text style={{ fontSize: 25, paddingBottom: 10 }}>Most Active Tags</Text>
      <View style={{ flexDirection: "row", backgroundColor: "black" }}>
        <Text
          style={{
            flex: 2,
            textAlign: "center",
            textAlignVertical: "center",
            borderWidth: 1,
            color: "#fff",
          }}
        >
          Tag
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            textAlignVertical: "center",
            borderWidth: 1,
            color: "#fff",
          }}
        >
          Question Count
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            textAlignVertical: "center",
            borderWidth: 1,
            color: "#fff",
          }}
        >
          Subscribed User Count
        </Text>
      </View>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item._id.toString()}
        renderItem={rowComponent}
        // ListFooterComponent={<View style={{ padding: 100 }} />}
      />
    </View>
  );
};

export default ActiveTagsTable;

const styles = StyleSheet.create({});
