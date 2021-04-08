import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { getSingleTagAndPosts } from "../../redux/actions/tagsScreen/getSingleTagAndPostsAction";
import FeedCard from "../homeFeed/FeedCard";

const SingleTagData = ({ tagId, getSingleTagAndPosts, singleTag }) => {
  useEffect(() => {
    getSingleTagAndPosts(tagId);
  }, []);
  return (
    <View>
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
        }}
      />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tagId: ownProps.id,
    singleTag: state.getSingleTagAndPostsState,
  };
};
export default connect(mapStateToProps, { getSingleTagAndPosts })(
  SingleTagData
);

const styles = StyleSheet.create({});
