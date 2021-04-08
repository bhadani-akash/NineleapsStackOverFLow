import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
} from "react-native";

import { connect, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { subscribeTag } from "../../redux/actions/tagsScreen/subscribeTagAction";
import SingleTagData from "../modal/SingleTagData";

const TagCard = (props) => {
  const dispatch = useDispatch();
  const [id, setUserId] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem("userData");
        jsonValue = JSON.parse(jsonValue);
        // console.log("Stored user", jsonValue._id);
        setUserId(jsonValue._id);
      } catch (e) {
        console.log("Display User Data Error:", e);
      }
    };
    getData();
  }, []);

  const subscribeToTag = (tagData) => {
    const data = {
      user: {
        _id: id,
      },
    };
    dispatch(subscribeTag(tagData._id, data));
    Alert.alert(tagData.tags, "SUBSCRIBED");
  };

  return (
    <ImageBackground
      source={require("../../assets/voteBGImage3.jpg")}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        marginHorizontal: 10,
        borderWidth: 2,
        // flex: 1,
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>
            {props.data.item.tags}
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          visible={modal}
          onRequestClose={() => {
            setModal(false);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              // backgroundColor: "#EDEDED",
            }}
          >
            <SingleTagData id={props.data.item._id} />
          </View>
        </Modal>

        <Text style={{ fontSize: 13 }}>
          {/* Number of Questions related to this tag:{" "} */}
          Total Questions: {props.data.item.questions.length}
        </Text>
        <Text style={{ fontSize: 13 }}>
          Users subscribed: {props.data.item.user.length}
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {props.data.item.user.includes(id) ? (
          <Button
            title="SUBSCRIBED"
            disabled={props.data.item.user.includes(id)}
          />
        ) : (
          <Button
            title="SUBSCRIBE"
            onPress={() => {
              subscribeToTag(props.data.item);
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default TagCard;

const styles = StyleSheet.create({});
