import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserDetails = (props) => {
  const user = {
    image: "https://i.imgur.com/q52cLwEb.jpg",
  };

  return (
    <View style={styles.container}>
      {props.userData.photo ? (
        <Image source={{ uri: props.userData.photo }} style={styles.image} />
      ) : (
        <Image source={{ uri: user.image }} style={styles.image} />
      )}

      <View style={styles.innerContainer}>
        {props.userData.name ? (
          <Text style={styles.name}>{props.userData.name}</Text>
        ) : null}
        {props.userData.designation ? (
          <Text style={styles.designation}>{props.userData.designation}</Text>
        ) : null}
        {props.userData.shortbio ? (
          <>
            <Text style={styles.bioHeader}>Short Bio:</Text>
            <Text style={styles.bio}>{props.userData.shortbio}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#a6a6a6",
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#c2c2c2",
  },
  innerContainer: {
    flex: 1,
    paddingLeft: 10,
    // backgroundColor: '#8a7846',
  },
  name: {
    // backgroundColor: "#f7ca4f",
    fontSize: 25,
    fontWeight: "bold",
  },
  designation: {
    // backgroundColor: "#d14545",
    fontSize: 17,
    paddingBottom: 20,
  },
  bioHeader: {
    // backgroundColor: "#f7ca4f",
    fontSize: 18,
  },
  bio: {
    // backgroundColor: "#d14545",
    textAlign: "justify",
  },
});
