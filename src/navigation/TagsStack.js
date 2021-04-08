import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AllTags from "../components/tags/AllTags";
import SingleTagAndPosts from "../components/tags/SingleTagAndPosts";
import TagFeedPost from "../components/tags/TagFeedPost";
import ViewProfile from "../components/tags/ViewProfile";

const Stack = createStackNavigator();

function TagsStack() {
  return (
    <Stack.Navigator
      initialRouteName={"AllTags"}
      // screenOptions={{
      //   headerStyle: { backgroundColor: "#c1def5" },
      //   // headerTintColor: "#fff",
      //   headerTitleStyle: { fontWeight: "bold" },
      //   headerTitleAlign: "center",
      //   headerRight: () => (
      //     <Button
      //       onPress={() => alert("This is a button!")}
      //       title="Info"
      //       // color="#fff"
      //     />
      //   ),
      // }}
      headerMode={"none"}
    >
      <Stack.Screen name="AllTags" component={AllTags} />
      <Stack.Screen name="SingleTagAndPosts" component={SingleTagAndPosts} />
      <Stack.Screen name="TagPost" component={TagFeedPost} />
      <Stack.Screen name="ViewProfile" component={ViewProfile} />
    </Stack.Navigator>
  );
}
export default TagsStack;

// function Home() {
//     return (
//       <Stack.Navigator
//       initialRouteName="Home_screen"
//       screenOptions={{
//       //  headerStyle: { backgroundColor: '#42F44B' },
//       //   headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' },
//         headerTitleAlign:'center'
//       }}
//       >
//        <Stack.Screen
//           name="Home_screen"
//           component={Trips}
//           options={{ title: 'Home' }}
//         />
//       </Stack.Navigator>
//     );
//   }
