import React from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";

const TopVotedQuestionTable = (props) => {
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
        {item.question}
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
        {item.voteCount}
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
      <Text style={{ fontSize: 25, paddingBottom: 10 }}>
        Top Voted Questions
      </Text>

      {/* <View style={{ flexDirection: "row", backgroundColor: "black" }}>
        <Text
          style={{
            flex: 3,
            textAlign: "center",
            textAlignVertical: "center",
            borderWidth: 1,
            color: "#fff",
          }}
        >
          Question
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
          User Name
        </Text>
        <Text
          style={{
            flex: 0.7,
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
            flex: 1,
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
      /> */}
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
              Question
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

export default TopVotedQuestionTable;

const styles = StyleSheet.create({});
