import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserDetails = () => {
  const [data, getData] = useState({});

  useEffect(() => {
    fetch("https://60214d0546f1e40017804365.mockapi.io/userdata", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // JSON.stringify(responseJson);
        // console.log(responseJson);
        const output = Object.assign({}, ...responseJson);
        // console.log(output);
        getData(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  user = {
    image: "https://i.imgur.com/q52cLwEb.jpg",
    //   name: <Text>Akash Bhadani</Text>,
    //   designation: <Text>Graduate Engineering Intern</Text>,
    //   shortBio: (
    //     <Text>
    //       {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
    //       laying out print, graphic or web designs.  */}
    //       This is a short bio.
    //     </Text>
    //   ),
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.designation}>{data.designaation}</Text>
        <Text style={styles.bioHeader}>Short Bio:</Text>
        <Text style={styles.bio}>{data.bio}</Text>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#a6a6a6',
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
    fontSize: 30,
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
