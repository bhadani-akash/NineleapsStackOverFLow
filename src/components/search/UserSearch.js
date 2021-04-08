import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from "react-native";
import UserDetails from "../myProfile/UserDetails";
import ViewProfile from "../tags/ViewProfile";
import UserCard from "./UserCard";

import AntDesign from "react-native-vector-icons/AntDesign";

const UserSearch = (props) => {
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
            return (
              <View
                style={{
                  marginHorizontal: 10,
                  marginBottom: 10,
                  borderWidth: 1,
                  padding: 10,
                  // flexDirection: "row",
                }}
              >
                <UserCard data={item.item} />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default UserSearch;

const styles = StyleSheet.create({});
