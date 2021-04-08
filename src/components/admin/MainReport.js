import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import TopVotedQuestionTable from "./tables/TopVotedQuestionTable";
import TopVotedAnswerTable from "./tables/TopVotedAnswerTable";
import UserMostQuesTable from "./tables/UserMostQuesTable";
import UserMostAnsTable from "./tables/UserMostAnsTable";

const MainReport = (props) => {
  console.log(props);
  return (
    <>
      {props.data == undefined ? null : (
        <>
          <TopVotedQuestionTable data={props.data.topques} />
          <TopVotedAnswerTable data={props.data.topans} />
          <UserMostQuesTable data={props.data.usermostques} />
          <UserMostAnsTable data={props.data.usermostans} />
        </>
      )}
    </>
  );
  // return (
  //   <View
  //     //   horizontal={true}
  //     style={{
  //       backgroundColor: "#fff",
  //       margin: 10,
  //       paddingHorizontal: 10,
  //       paddingBottom: 20,
  //     }}
  //   >
  //     {/* Top Question */}
  //     {props.data.topques == undefined ? null : (
  //       <View>
  //         <Text style={styles.header}>Top Voted Question:</Text>
  //         <View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Question</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text numberOfLines={2}>{props.data.topques[0].question}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>User Name</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topques[0].user.name}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Vote Count</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topques[0].voteCount}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Tags</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topques[0].tags}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     )}

  //     {/* Top Answer */}
  //     {props.data.topans == undefined ? null : (
  //       <View>
  //         <Text style={styles.header}>Top Voted Answer:</Text>
  //         <View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Answer</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text numberOfLines={2}>{props.data.topans[0].text}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>User Name</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topans[0].user.name}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Vote Count</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topans[0].voteCount}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{ backgroundColor: "black", padding: 10, width: 80 }}
  //             >
  //               <Text style={{ color: "#fff" }}>Tags</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.topans[0].tags}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     )}

  //     {/* User who question most */}
  //     {props.data.usermostques == undefined ? null : (
  //       <View>
  //         <Text style={styles.header}>User who Question most:</Text>
  //         <View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>User Name</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostques[0].name}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Designation</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostques[0].designation}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Short Bio</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostques[0].shortbio}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{ backgroundColor: "black", padding: 10, width: 80 }}
  //             >
  //               <Text style={{ color: "#fff" }}>Total Questions</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostques[0].totalquestion}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     )}

  //     {/* User who answer most */}
  //     {props.data.usermostans == undefined ? null : (
  //       <View>
  //         <Text style={styles.header}>User who Answer most:</Text>
  //         <View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>User Name</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostans[0].name}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               //   borderTopWidth: 1,
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Designation</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostans[0].designation}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{
  //                 backgroundColor: "black",
  //                 padding: 10,
  //                 width: 80,
  //               }}
  //             >
  //               <Text style={{ color: "#fff" }}>Short Bio</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostans[0].shortbio}</Text>
  //             </View>
  //           </View>
  //           <View
  //             style={{
  //               borderRightWidth: 1,
  //               //   borderBottomWidth: 1,
  //               flexDirection: "row",
  //               alignItems: "center",
  //             }}
  //           >
  //             <View
  //               style={{ backgroundColor: "black", padding: 10, width: 80 }}
  //             >
  //               <Text style={{ color: "#fff" }}>Total Answers</Text>
  //             </View>
  //             <View style={{ flex: 1, paddingLeft: 10 }}>
  //               <Text>{props.data.usermostans[0].totalanswer}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </View>
  //     )}
  //   </View>
  // );
};

export default MainReport;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    paddingVertical: 10,
    textDecorationLine: "underline",
  },
  con: {
    backgroundColor: "black",
  },
});
