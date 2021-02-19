import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// export default class Badge extends React.Component {
//   user = {
//     badgeimage: "https://i.imgur.com/tUTCtESb.jpg",
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{ fontSize: 30, fontWeight: "bold" }}>Badge:</Text>
//         <Image source={{ uri: this.user.badgeimage }} style={styles.image} />
//       </View>
//     );
//   }
// }

const Badge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Badge:</Text>
      <Image
        source={{ uri: "https://i.imgur.com/tUTCtESb.jpg" }}
        style={styles.image}
      />
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#7a7676",
    marginHorizontal: 10,
    marginBottom: 10,
    // paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,

    // borderWidth: 2,
    // borderColor: "#000000",
  },
});
