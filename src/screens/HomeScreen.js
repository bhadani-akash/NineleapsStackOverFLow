import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useFocusEffect } from "@react-navigation/native";

import Header from "../components/Header";
import FeedCard from "../components/homeFeed/FeedCard";
import AskAQuestionLabel from "../components/homeFeed/AskAQuestionLabel";

import { getposts } from "../redux/actions/posts/postActions";

const HomeScreen = ({ getposts, Posts, newQuestionProp }) => {
  console.log("all posts", Posts.posts);
  console.log("new ques", newQuestionProp);
  const [feedData, setFeedData] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [isListEnd, setIsListEnd] = useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getposts(page);
  //     // getData();
  //   }, [question, page])
  // );
  useEffect(() => {
    getposts(page);
  }, [newQuestionProp, page]);

  const getData = () => {
    console.log("component page", page);
    setPage(page + 1);
    // if (!loading && !isListEnd) {
    //   console.log("getData");
    //   setLoading(true);
    //   getposts(page);
    //   console.log("58758", Posts);
    //   if (Posts.posts.length > 0) {
    //     setPage(page + 1);
    //     setDataSource([...dataSource, ...Posts.posts]);
    //     setLoading(false);
    //   } else {
    //     setIsListEnd(true);
    //     setLoading(false);
    //   }
    // }
  };
  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {loading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  };

  return (
    <>
      <Header />
      <View style={{ flex: 1 }}>
        {Posts.posts.length === 0 ? (
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={"black"}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <FlatList
            ListHeaderComponent={() => <AskAQuestionLabel />}
            data={Posts.posts}
            keyExtractor={(item) => item._id.toString()}
            renderItem={(item) => {
              return <FeedCard data={item} />;
            }}
            ListFooterComponent={renderFooter}
            onEndReached={getData}
            onEndReachedThreshold={0.3}
            removeClippedSubviews={false}
          />
        )}
      </View>
    </>
  );
};

// HomeScreen.propTypes = {
//   getposts: PropTypes.func.isRequired,
//   Posts: PropTypes.object.isRequired,
//   question: PropTypes.object.isRequired,
// };
const mapStateToProps = (state) => {
  return {
    Posts: state.postsData,
    // question: state.questionData,
    newQuestionProp: state.newQuestion,
  };
};
export default connect(mapStateToProps, { getposts })(HomeScreen);
