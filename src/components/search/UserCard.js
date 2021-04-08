import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import ViewProfile from "../tags/ViewProfile";

const UserCard = (props) => {
  const [viewProfileModal, setViewProfileModal] = useState(false);

  const route = {
    params: {
      userId: props.data._id,
    },
  };
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {props.data.photo ? (
        <Image
          source={{ uri: props.data.photo }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#c2c2c2",
          }}
        />
      ) : (
        <Image
          source={{ uri: "https://i.imgur.com/q52cLwEb.jpg" }}
          style={{
            height: 80,
            width: 80,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "#c2c2c2",
          }}
        />
      )}
      <View style={{ flex: 1, paddingLeft: 20 }}>
        <TouchableOpacity
          onPress={() => {
            setViewProfileModal(true);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.data.name}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          visible={viewProfileModal}
          onRequestClose={() => {
            setViewProfileModal(false);
          }}
        >
          <View
            style={{
              backgroundColor: "lightgrey",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                // backgroundColor: "#fff",
                backgroundColor: "#c1def5",
                // height: 70,
              }}
            >
              ViewProfile
            </Text>
            <View
              style={{
                marginBottom: 10,
                // backgroundColor: "#EDEDED"
              }}
            ></View>
          </View>

          <ViewProfile route={route} />
        </Modal>
        {props.data.designation ? (
          <Text style={{ fontSize: 15, paddingBottom: 10 }}>
            {props.data.designation}
          </Text>
        ) : null}
        {props.data.shortbio ? (
          <>
            <Text style={{ fontSize: 15 }}>Short Bio:</Text>
            <Text style={{ textAlign: "justify" }}>{props.data.shortbio}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({});
