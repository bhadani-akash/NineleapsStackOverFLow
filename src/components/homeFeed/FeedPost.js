import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { connect, useDispatch } from "react-redux";

import PropTypes from "prop-types";

import FeedPostAnswer from "./FeedPostAnswer";

import postAnswerAction from "../../redux/actions/answers/postAnswerAction";
import { getpost } from "../../redux/actions/posts/postActions";
import voteQuestionAction from "../../redux/actions/homeFeed/voteQuestionAction";
import ViewProfile from "../tags/ViewProfile";

import postQuestionCommentAction from "../../redux/actions/homeFeed/postQuestionCommentAction";

const FeedPost = ({ id, Post, Answer, voteQuestion, questionComment }) => {
  const [viewProfileModal, setViewProfileModal] = useState(false);

  const [user, setUser] = useState("");
  const [ans, setAnswer] = useState("");
  const [comm, setComm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem("userData");
        jsonValue = JSON.parse(jsonValue);
        setUser(jsonValue);
      } catch (e) {
        console.log("Get User Data Error:", e);
      }
    };
    getData();

    if (Object.keys(Post).length === 0) {
      dispatch(getpost(id));
    } else {
      dispatch(getpost(id));
    }
  }, [Answer, voteQuestion, questionComment]);

  const submitAnswerToServer = () => {
    if (ans == "") {
      Alert.alert("Write your answer...", "Answer can't be empty!");
    } else {
      const data = {
        user: user,
        text: ans,
      };
      dispatch(postAnswerAction(id, data));
      setAnswer("");
    }
  };

  const questionVote = () => {
    const data = {
      voters: {
        _id: user._id,
      },
    };

    if (Post.user._id == user._id) {
      Alert.alert("UpVote Failed", "You cannot upvote your question");
    } else if (Post.voters.includes(user._id)) {
      Alert.alert("UpVote Failed", "You cannot upvote more than once");
    } else {
      dispatch(voteQuestionAction(id, data));
    }
  };
  const submitCommentToServer = () => {
    if (comm == "") {
      Alert.alert("Write a comment...", "Comment can't be empty!");
    } else {
      const data = {
        user: user,
        comment: comm,
      };
      const id = Post._id;

      dispatch(postQuestionCommentAction(id, data));
      setComm("");
      // dispatch(getpost(ownProps.questionID));
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
      <Text
        style={{
          fontSize: 12,
          textAlign: "justify",
        }}
      >
        C: {item.comment} - by {item.user.name} -{" "}
        {moment(item.createdAt).fromNow()}
      </Text>
    </View>
  );

  if (Object.keys(Post).length === 0) {
    return (
      <View>
        <ActivityIndicator size={"small"} animating={true} color={"black"} />
      </View>
    );
  } else {
    const route = {
      params: {
        userId: Post.user._id,
      },
    };
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: "white",
        }}
      >
        <FlatList
          removeClippedSubviews={false}
          data={Post.answers}
          renderItem={(item) => {
            return <FeedPostAnswer answer={item} questionID={id} />;
          }}
          keyExtractor={(item) => item._id.toString()}
          ListHeaderComponent={
            <>
              {/*Header(Name, time) part for single post of question*/}
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="person" size={14} color="black" />
                  <TouchableOpacity
                    onPress={() => {
                      setViewProfileModal(true);
                    }}
                  >
                    <Text style={{ paddingLeft: 5 }}>{Post.user.name}</Text>
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
                  <Text>{moment(Post.createdAt).fromNow()}</Text>
                </View>
              </View>

              {/*Body(question, upvote button) of single post of question*/}
              <View
                style={{
                  paddingVertical: 5,
                  justifyContent: "space-between",
                  minHeight: 60,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ textAlign: "justify" }}>
                    Q: {Post.question}
                  </Text>
                </View>
                {Post.tags == undefined ? null : (
                  <View
                    style={{
                      paddingTop: 10,
                    }}
                  >
                    <Text>Tags: {Post.tags}</Text>
                  </View>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                    paddingBottom: 5,
                  }}
                >
                  {Post.voters.includes(user._id) ? (
                    <TouchableOpacity
                      onPress={() => {
                        questionVote();
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
                        questionVote();
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
                  <Text>{Post.voters.length} Votes</Text>
                  <Text>{Post.answers.length} Answers</Text>
                </View>
              </View>

              {/* To display multiple comments in questions */}
              <FlatList
                data={Post.comments}
                keyExtractor={(item) => item._id.toString()}
                renderItem={renderComment}
                removeClippedSubviews={false}
              />

              {/* Write a comment area */}
              <View
                style={{
                  borderBottomWidth: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
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
            </>
          }
        />

        {/*Write your answer component for single post of question*/}
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "grey",
            paddingVertical: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{ flex: 1 }}
            placeholder="Write your Answer..."
            multiline={true}
            value={ans}
            onChangeText={(ans) => setAnswer(ans)}
          />
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                submitAnswerToServer();
              }}
              style={{ padding: 5, backgroundColor: "#0895cc" }}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

FeedPost.propTypes = {
  getpost: PropTypes.func.isRequired,
  Post: PropTypes.object.isRequired,
  Answer: PropTypes.object.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.data._id,
    Post: state.postData.post,
    Answer: state.postAnswerData,
    voteQuestion: state.voteQuestionState,
    questionComment: state.postQuestionCommentState,
  };
};
export default connect(mapStateToProps, {
  postAnswerAction,
  getpost,
  voteQuestionAction,
  postQuestionCommentAction,
})(FeedPost);
