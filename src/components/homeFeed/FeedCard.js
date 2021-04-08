import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";

import FeedPost from "./FeedPost";
import ViewProfile from "../tags/ViewProfile";

const FeedCard = (props) => {
  const [modal, setModal] = useState(false);
  const [viewProfileModal, setViewProfileModal] = useState(false);
  // console.log("Inside Ques:", props.data.item.tags);

  const route = {
    params: {
      userId: props.data.item.user._id,
    },
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {console.log(props.data.item.user)}
          <Ionicons name="person" size={14} color="black" />
          {/* <Image
            source={{
              uri: props.data.item.user.photo
                ? props.data.item.user.photo
                : "https://i.imgur.com/q52cLwEb.jpg",
            }}
            style={{ height: 18, width: 18, borderRadius: 15 }}
          /> */}
          <TouchableOpacity
            onPress={() => {
              setViewProfileModal(true);
            }}
          >
            <Text style={{ paddingLeft: 5 }}>{props.data.item.user.name}</Text>
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
                flexDirection: "row",
                backgroundColor: "#c1def5",
                alignItems: "center",
                height: 70,
                paddingHorizontal: 10,
              }}
            >
              <Ionicons
                name="arrow-back"
                size={40}
                color="black"
                onPress={() => {
                  setViewProfileModal(false);
                }}
              />
              <Text style={{ fontSize: 30, paddingLeft: 10 }}>
                View Profile
              </Text>
            </View>
            <ViewProfile route={route} />
          </Modal>
        </View>
        <View style={styles.headerRight}>
          <Text>Posted: {moment(props.data.item.createdAt).fromNow()}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.question}>
          <TouchableOpacity
            onPress={() => {
              setModal(true);
            }}
          >
            <Text numberOfLines={3} style={{ textAlign: "justify" }}>
              Q: {props.data.item.question}
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            visible={modal}
            onRequestClose={() => {
              setModal(false);
            }}
          >
            <View style={{ flex: 1, backgroundColor: "#EDEDED" }}>
              <View
                style={{
                  flex: 0.07,
                  padding: 5,
                  flexDirection: "row",
                  // backgroundColor: "white",
                  backgroundColor: "#c1def5",
                  // backgroundColor: "#EDEDED",
                  marginBottom: 10,
                }}
              >
                <Ionicons
                  style={{
                    flex: 1,
                    // backgroundColor: "pink",
                  }}
                  name="arrow-back"
                  size={40}
                  color="black"
                  onPress={() => {
                    setModal(false);
                  }}
                />
                <Text
                  style={{
                    flex: 9,
                    // backgroundColor: "lightgrey",
                    textAlign: "center",
                    fontSize: 30,
                  }}
                >
                  NineleapsStackOverFlow
                </Text>
              </View>
              <FeedPost data={props.data.item} />
            </View>
          </Modal>
        </View>
      </View>
      {props.data.item.tags == undefined ? null : (
        <View
          style={{
            backgroundColor: "white",
            // borderTopWidth: 1,
            // borderTopColor: "#9eaaad",
            // backgroundColor: "#9eaaad",
            // alignItems: "center",
            paddingVertical: 5,
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={
              {
                // backgroundColor: "lightgrey",
              }
            }
          >
            Tags: {props.data.item.tags}
          </Text>
        </View>
      )}
      <View style={styles.footer}>
        <Text>{props.data.item.answers.length} Answers</Text>
        <Text>{props.data.item.voters.length} Votes</Text>
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 10,
    // backgroundColor: "#fff",
    // backgroundColor: "#9adbed",
    // backgroundColor: "#bfe364",
    // backgroundColor: "#fac0c0",
    // backgroundColor: "#dbd3d3",
    backgroundColor: "#9eaaad",
    marginBottom: 10,
    borderRadius: 10,
  },
  header: {
    // flex: 1,
    // height: 30,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    // borderBottomWidth: 1,
    // borderBottomColor: "grey",
    // backgroundColor: "aqua",
  },
  headerLeft: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  headerRight: {
    // backgroundColor: "red",
  },
  body: {
    // flex: 3,
    flexDirection: "row",
    // padding: 5,
    justifyContent: "space-between",
    height: 60,
    // backgroundColor: "coral",
  },
  question: {
    paddingHorizontal: 5,

    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "pink",
    backgroundColor: "#fff",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  // bodyBtn: {
  //   paddingHorizontal: 5,
  //   paddingTop: 13,
  //   // justifyContent: "center",
  //   // backgroundColor: "grey",
  //   backgroundColor: "#fff",
  //   borderBottomRightRadius: 10,
  // },
  // upVoteBtn: {
  //   height: 20,
  //   // borderRadius: 5,
  //   // borderBottomWidth: 1,
  //   // borderBottomColor: "grey",
  //   // backgroundColor: "#0895cc",
  // },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#9eaaad",
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
