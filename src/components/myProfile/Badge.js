import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Badge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Badges Earned</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
          source={{ uri: "https://i.imgur.com/2n0AjLb.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/YwAmPYu.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/CqAGYyZ.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/dCS4tQk.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/ZqoEU9o.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/sk7xQTN.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/sKV54PO.jpeg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/tnAYEl3.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.imgur.com/ea9PB3H.png" }}
          style={styles.image}
        />
      </ScrollView>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 8,
  },
});
