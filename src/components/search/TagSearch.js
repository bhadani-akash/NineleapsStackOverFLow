import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import TagCard from "../tags/TagCard";

const TagSearch = (props) => {
  return (
    <View>
      {props.data.length == 0 ? (
        <View
          style={{
            paddingTop: 50,
            alignItems: "center",
            opacity: 0.1,
          }}
        >
          <AntDesign name="frowno" size={200} color="black" />
          <Text style={{ marginTop: 20, fontSize: 40 }}>No Results Found</Text>
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={<View style={{ padding: 5 }} />}
          ListFooterComponent={
            <View
              style={{
                // padding: 35,
                padding: 50,
              }}
            />
          }
          data={props.data}
          keyExtractor={(item) => item._id.toString()}
          renderItem={(item) => {
            return <TagCard data={item} />;
          }}
        />
      )}
    </View>
  );
};

export default TagSearch;

const styles = StyleSheet.create({
  tagContainer: {
    // height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 10,
    borderWidth: 2,
    // flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  innerContainerLeft: {
    flex: 2,
    // margin: 10,
    justifyContent: "space-between",
    // backgroundColor: "#edb24c",
  },
  innerContainerRight: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginVertical: 10,
    // marginRight: 10,
    // backgroundColor: "#e677a9",
  },
  tag: {
    // backgroundColor: "#c1eb91",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    // backgroundColor: "#b0ffe1",
    fontSize: 13,
  },
});
