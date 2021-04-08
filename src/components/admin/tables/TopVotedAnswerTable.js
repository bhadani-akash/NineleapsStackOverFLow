import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

const TopVotedAnswerTable = (props) => {
  const rowComponent = ({ item }) => (
    <View style={{ backgroundColor: "#fff", flexDirection: "row" }}>
      <Text
        style={{
          // flex: 3,
          width: 200,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
          padding: 5,
        }}
        numberOfLines={5}
      >
        {item.text}
      </Text>
      <Text
        style={{
          // flex: 1,
          width: 150,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.user.name}
      </Text>
      <Text
        style={{
          // flex: 0.7,
          width: 100,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.voteCount ? item.voteCount : 0}
      </Text>
      <Text
        style={{
          // flex: 1,
          width: 120,
          textAlign: "center",
          textAlignVertical: "center",
          borderWidth: 1,
        }}
      >
        {item.tags}
      </Text>
    </View>
  );
  return (
    <View style={{ marginHorizontal: 10, marginBottom: 20, flex: 1 }}>
      <Text style={{ fontSize: 25, paddingBottom: 10 }}>Top Voted Answers</Text>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flexDirection: "row", backgroundColor: "black" }}>
            <Text
              style={{
                // flex: 3,
                width: 200,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Answer
            </Text>
            <Text
              style={{
                // flex: 1,
                width: 150,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              User Name
            </Text>
            <Text
              style={{
                // flex: 0.7,
                width: 100,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Vote Count
            </Text>
            <Text
              style={{
                // flex: 1,
                width: 120,
                textAlign: "center",
                textAlignVertical: "center",
                borderWidth: 1,
                color: "#fff",
              }}
            >
              Tags
            </Text>
          </View>
          <FlatList
            data={props.data}
            keyExtractor={(item) => item._id.toString()}
            renderItem={rowComponent}
            // ListFooterComponent={<View style={{ padding: 100 }} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TopVotedAnswerTable;

const styles = StyleSheet.create({});
