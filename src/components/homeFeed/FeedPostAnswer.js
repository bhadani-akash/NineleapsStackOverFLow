import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { connect, useDispatch } from "react-redux";

import postCommentAction from "../../redux/actions/homeFeed/postCommentAction";
import { getpost } from "../../redux/actions/posts/postActions";
import voteAnswerAction from "../../redux/actions/homeFeed/voteAnswerAction";
import ViewProfile from "../tags/ViewProfile";

const FeedPostAnswer = ({ ownProps, commentStateToProp, voteAnswer }) => {
  const [viewProfileModal, setViewProfileModal] = useState(false);

  const [user, setUser] = useState("");
  const [comm, setComm] = useState("");

  const route = {
    params: {
      userId: ownProps.answer.item.user._id,
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem("userData");
        jsonValue = JSON.parse(jsonValue);
        // console.log("Stored user:", jsonValue.name);
        setUser(jsonValue);
      } catch (e) {
        console.log("Get User Data Error:", e);
      }
    };
    getData();
    dispatch(getpost(ownProps.questionID));
  }, [commentStateToProp, voteAnswer]);

  const submitCommentToServer = () => {
    if (comm == "") {
      Alert.alert("Write a comment...", "Comment can't be empty!");
    } else {
      const data = {
        user: user,
        comment: comm,
      };
      const id = ownProps.answer.item._id;
      dispatch(postCommentAction(id, data));
      setComm("");
    }
  };

  const answerVote = () => {
    const data = {
      voters: {
        _id: user._id,
      },
    };
    const id = ownProps.answer.item._id;
    if (ownProps.answer.item.user._id == user._id) {
      Alert.alert("UpVote Failed", "You cannot upvote your answer");
    } else if (ownProps.answer.item.voters.includes(user._id)) {
      Alert.alert("UpVote Failed", "You cannot upvote more than once");
    } else {
      dispatch(voteAnswerAction(id, data));
    }
  };

  const renderComment = ({ item }) => (
    <View
      style={{
        padding: 5,
        marginBottom: 5,
        backgroundColor: "#d9dedb",
      }}
    >
      <Text style={{ fontSize: 12, textAlign: "justify" }}>
        C: {item.comment} - by {item.user.name} -{" "}
        {moment(item.createdAt).fromNow()}
      </Text>
    </View>
  );

  return (
    <View
      style={{ borderLeftWidth: 5, borderLeftColor: "grey", paddingLeft: 5 }}
    >
      {/* Answer Header */}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person" size={14} color="black" />
          <TouchableOpacity
            onPress={() => {
              setViewProfileModal(true);
            }}
          >
            <Text style={{ paddingLeft: 5 }}>
              {ownProps.answer.item.user.name}
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
        </View>
        <View>
          <Text>{moment(ownProps.answer.item.createdAt).fromNow()}</Text>
        </View>
      </View>

      {/* Answer Body */}
      <View
        style={{
          paddingVertical: 5,
          justifyContent: "space-between",
          minHeight: 60,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ textAlign: "justify" }}>
            A: {ownProps.answer.item.text}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            paddingBottom: 5,
          }}
        >
          {ownProps.answer.item.voters.includes(user._id) ? (
            <TouchableOpacity
              onPress={() => {
                answerVote();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  backgroundColor: "#9eaaad",
                  paddingHorizontal: 5,
                  borderRadius: 15,
                }}
              >
                <Ionicons name="arrow-up" size={15} color="black" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                answerVote();
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 15,
                }}
              >
                <Ionicons name="arrow-up" size={15} color="black" />
              </View>
            </TouchableOpacity>
          )}
          <Text>{ownProps.answer.item.voters.length} Votes</Text>
          <Text>{ownProps.answer.item.comments.length} Comments</Text>
        </View>
      </View>

      {/* Comments within each answer */}
      <FlatList
        data={ownProps.answer.item.comments}
        renderItem={renderComment}
        keyExtractor={(item) => item._id.toString()}
      />

      {/* Write a comment area */}
      <View
        style={{
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{ flex: 1 }}
          placeholder="Write a comment..."
          multiline={true}
          value={comm}
          onChangeText={(comm) => setComm(comm)}
        />
        <View style={{ justifyContent: "center" }}>
          {comm == "" ? (
            <TouchableOpacity disabled={true}>
              <Text style={{ color: "lightgrey" }}>Comment</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                submitCommentToServer();
              }}
            >
              <Text style={{ color: "black" }}>Comment</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps,
    commentStateToProp: state.postCommentState,
    voteAnswer: state.voteAnswerState,
  };
};

export default connect(mapStateToProps, {
  postCommentAction,
  getpost,
  voteAnswerAction,
})(FeedPostAnswer);
