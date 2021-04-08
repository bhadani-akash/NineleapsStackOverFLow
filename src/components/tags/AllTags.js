import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllTags } from "../../redux/actions/tagsScreen/getAllTagsAction";
import { subscribeTag } from "../../redux/actions/tagsScreen/subscribeTagAction";
import { useFocusEffect } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import SingleTagAndPosts from "./SingleTagAndPosts";

const AllTags = ({ getAllTags, allTags, subscribedTags, navigation }) => {
  const dispatch = useDispatch();
  const [id, setUserId] = useState();

  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       let jsonValue = await AsyncStorage.getItem("userData");
  //       jsonValue = JSON.parse(jsonValue);
  //       // console.log("Stored user", jsonValue._id);
  //       setUserId(jsonValue._id);
  //     } catch (e) {
  //       console.log("Display User Data Error:", e);
  //     }
  //   };
  //   getData();
  //   getAllTags();
  // }, [subscribedTags]);
  useFocusEffect(
    React.useCallback(() => {
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
      getAllTags();
    }, [subscribedTags])
  );

  const subscribeToTag = (tagData) => {
    const data = {
      user: {
        _id: id,
      },
    };
    dispatch(subscribeTag(tagData._id, data));
    Alert.alert(tagData.tags, "SUBSCRIBED");
  };

  if (allTags.loading === true && allTags.tags.length == 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} animating={true} color={"black"} />
      </View>
    );
  } else if (/*allTags.loading === false && */ allTags.tags.length !== 0) {
    return (
      <View
        style={{
          flex: 1,
          // marginHorizontal: 10,
          // paddingHorizontal: 10,
          // paddingTop: 10,
          backgroundColor: "white",
        }}
      >
        <FlatList
          ListHeaderComponent={<View style={{ padding: 7.5 }}></View>}
          data={allTags.tags}
          keyExtractor={(item) => item._id.toString()}
          renderItem={(item) => {
            return (
              <ImageBackground
                source={require("../../assets/voteBGImage3.jpg")}
                style={styles.tagContainer}
              >
                {/* {console.log("tag", item.item)} */}
                <View style={styles.innerContainerLeft}>
                  <TouchableOpacity
                    // onPress={() =>
                    //   navigation.navigate("SingleTagAndPosts", {
                    //     id: item.item._id,
                    //   })
                    // }
                    onPress={() => {
                      setModal(true);
                    }}
                  >
                    <Text style={styles.tag}>{item.item.tags}</Text>
                  </TouchableOpacity>
                  <Modal
                    animationType="fade"
                    visible={modal}
                    onRequestClose={() => {
                      setModal(false);
                    }}
                  >
                    <View style={{ flex: 1, backgroundColor: "#EDEDED" }}>
                      <Text>Hi</Text>
                      {/* <SingleTagAndPosts tagId={item.item._id} /> */}
                    </View>
                  </Modal>

                  <Text style={styles.description}>
                    {/* Number of Questions related to this tag:{" "} */}
                    Total Questions: {item.item.questions.length}
                  </Text>
                  <Text style={styles.description}>
                    Users subscribed: {item.item.user.length}
                  </Text>
                </View>
                <View style={styles.innerContainerRight}>
                  {item.item.user.includes(id) ? (
                    <Button
                      title="SUBSCRIBED"
                      disabled={item.item.user.includes(id)}
                    />
                  ) : (
                    <Button
                      title="SUBSCRIBE"
                      onPress={() => {
                        subscribeToTag(item.item);
                      }}
                    />
                  )}
                </View>
              </ImageBackground>
            );
          }}
        />
      </View>
    );
  } else if (
    allTags.loading === false &&
    allTags.tags.length == 0 &&
    allTags.error != ""
  ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Something went wrong!</Text>
        <Text>Get All Tags Failed</Text>
        <Text>{allTags.error}</Text>
        {Alert.alert("Get All Tags Error", allTags.error)}
      </View>
    );
  } else return null;
};
const mapStateToProps = (state) => {
  return {
    allTags: state.getAllTagsState,
    subscribedTags: state.subscribedTagState,
  };
};

export default connect(mapStateToProps, { getAllTags })(AllTags);

const styles = StyleSheet.create({
  // tagContainer: {
  //   // height: 100,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 15,
  //   marginHorizontal: 10,
  //   borderWidth: 2,
  //   // flex: 1,
  //   backgroundColor: "white",
  //   padding: 10,
  // },
  // innerContainerLeft: {
  //   flex: 2,
  //   // margin: 10,
  //   justifyContent: "space-between",
  //   // backgroundColor: "#edb24c",
  // },
  // innerContainerRight: {
  //   flex: 1,
  //   justifyContent: "center",
  //   // alignItems: "center",
  //   // marginVertical: 10,
  //   // marginRight: 10,
  //   // backgroundColor: "#e677a9",
  // },
  // tag: {
  //   // backgroundColor: "#c1eb91",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   marginBottom: 15,
  // },
  // description: {
  //   // backgroundColor: "#b0ffe1",
  //   fontSize: 13,
  // },
});
