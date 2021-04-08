import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";

import Header from "../components/Header";
import TagCard from "../components/tags/TagCard";
import { getAllTags } from "../redux/actions/tagsScreen/getAllTagsAction";

const TagScreen = ({ getAllTags, allTags, subscribedTags }) => {
  useEffect(() => {
    getAllTags();
  }, [subscribedTags]);

  return (
    <>
      <Header />
      <FlatList
        ListHeaderComponent={<View style={{ padding: 7.5 }} />}
        data={allTags.tags}
        keyExtractor={(item) => item._id.toString()}
        renderItem={(item) => {
          return <TagCard data={item} />;
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allTags: state.getAllTagsState,
    subscribedTags: state.subscribedTagState,
  };
};
export default connect(mapStateToProps, { getAllTags })(TagScreen);
