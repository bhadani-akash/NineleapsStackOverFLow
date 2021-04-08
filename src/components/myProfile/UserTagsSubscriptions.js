import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const UserTagsSubscriptions = (props) => {
  const navigation = useNavigation();

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   setData(props.userData);
  //   return () => {
  //     // cleanup;
  //   };
  // }, [props]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>Tags Associated:</Text>
        </View>
        <Text style={styles.content}>
          {/* {props.userData.tagsAssociated == undefined ? ( */}
          {props.userData.tagsAssociated.length == 0 ? (
            <Text>No Tags Used</Text>
          ) : (
            // <Text>{props.userData.tagsAssociated.}</Text>
            props.userData.tagsAssociated.map((tagsAsso) => {
              return (
                <View key={tagsAsso}>
                  <View
                    style={{
                      padding: 5,
                      margin: 5,
                      backgroundColor: "lightgrey",
                    }}
                  >
                    <Text>{tagsAsso}</Text>
                  </View>
                </View>
              );
            })
          )}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>My Subscriptions:</Text>
        </View>
        <Text style={styles.content}>
          {props.userData.subscriptions.length == 0 ? (
            <Text>No Tags Subscribed</Text>
          ) : (
            props.userData.subscriptions.map((subs) => {
              return (
                <View key={subs._id}>
                  {/* {console.log(subs._id)} */}
                  <TouchableOpacity
                    // onPress={() =>
                    //   navigation.navigate("Tags", {
                    //     screen: "SingleTagAndPosts",
                    //     params: { id: subs._id },
                    //   })
                    // }
                    disabled={true}
                    style={{
                      padding: 5,
                      margin: 5,
                      backgroundColor: "lightgrey",
                    }}
                  >
                    <Text>{subs.tags}</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </Text>
      </View>
    </View>
  );
};

export default UserTagsSubscriptions;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    // backgroundColor: "#2b2828",
    marginBottom: 20,
  },
  innerContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    borderBottomWidth: 1,
    // padding: 5,
    // paddingRight: 10,
  },
  header: {
    // paddingLeft: 10,
    fontSize: 25,
    // borderWidth: 1,
  },
  content: {
    fontSize: 18,
    paddingTop: 10,
  },
});
