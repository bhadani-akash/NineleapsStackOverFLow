import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import { connect } from "react-redux";

import { getSingleTagAndPosts } from "../../redux/actions/tagsScreen/getSingleTagAndPostsAction";
import FeedCard from "../homeFeed/FeedCard";
import TagFeedCard from "./TagFeedCard";

const SingleTagAndPosts = ({
  props,
  getSingleTagAndPosts,
  singleTag,
  navigation,
  route,
}) => {
  console.log(props);
  useEffect(() => {
    getSingleTagAndPosts(route.params.id);
  }, []);

  if (singleTag.loading === true) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} animating={true} color={"black"} />
      </View>
    );
  } else if (singleTag.loading === false && singleTag.tag !== "") {
    return (
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center"
          backgroundColor: "white",
        }}
      >
        <FlatList
          ListHeaderComponent={() => (
            <View
              style={{
                padding: 10,
                alignItems: "center",
                backgroundColor: "#9eaaad",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>{singleTag.tag.tags}</Text>
            </View>
          )}
          data={singleTag.tag.questions}
          keyExtractor={(item) => item._id.toString()}
          renderItem={(item) => {
            return <FeedCard data={item} />;
            // return <TagFeedCard data={item} />;
          }}
        />
        {/* <Text>Single Tag with tag related cards</Text>
        <Button
          title="viewProfile"
          onPress={() => navigation.navigate("ViewProfile")}
        />
        <Button
          title="question"
          onPress={() => navigation.navigate("TagPost")}
        /> */}
      </View>
    );
  } else if (
    singleTag.loading === false &&
    singleTag.tag == "" &&
    singleTag.error !== ""
  ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Something went wrong!</Text>
        <Text>Get Tag Data Failed</Text>
        <Text>{singleTag.error}</Text>
        {Alert.alert("Get Tag Error", singleTag.error)}
      </View>
    );
  } else return null;
};
const mapStateToProps = (state) => {
  return {
    singleTag: state.getSingleTagAndPostsState,
  };
};
export default connect(mapStateToProps, { getSingleTagAndPosts })(
  SingleTagAndPosts
);

const styles = StyleSheet.create({});
