// import React from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";

// const TagsInput = () => {
//   const addTags = (item) => {
//     if (item.nativeEvent.key === "") {
//       alert(item.nativeEvent.key);
//       console.log(item);
//       //  handleSearch;
//       // called when multiline is true
//     } else {
//       console.log("something else get press");
//     }
//   };
//   return (
//     <View>
//       <TextInput
//         placeholder="eg(reactnative node)"
//         style={{ borderWidth: 1 }}
//         onKeyPress={addTags}
//       />
//     </View>
//   );
// };

// export default TagsInput;

// const styles = StyleSheet.create({});

// //
// //
// //

// // import React from "react";
// // import "../css/TagsInput.css";
// // const TagsInput = (props) => {
// //   const [tags, setTags] = React.useState(props.tags);
// //   const removeTags = (indexToRemove) => {
// //     setTags([...tags.filter((_, index) => index !== indexToRemove)]);
// //   };
// //   const addTags = (event) => {
// //     if (event.target.value !== "") {
// //       setTags([...tags, event.target.value]);
// //       props.selectedTags([...tags, event.target.value]);
// //       event.target.value = "";
// //     }
// //   };
// //   // console.log(tags)
// //   return (
// //     <div className="tags-input">
// //       <ul id="tags">
// //         {tags.map((tag, index) => (
// //           <li key={index} className="tag">
// //             <span className="tag-title">{tag}</span>
// //             <span className="tag-close-icon" onClick={() => removeTags(index)}>
// //               x
// //             </span>
// //           </li>
// //         ))}
// //       </ul>
// //       <input
// //         type="text"
// //         onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
// //         placeholder="Press enter to add tags"
// //       />
// //     </div>
// //   );
// // };
// // const App = () => {
// //   const selectedTags = (tags) => {
// //     console.log(tags);
// //   };
// //   return (
// //     <div className="App">
// //       <TagsInput selectedTags={selectedTags} tags={["Nodejs", "Reactjs"]} />
// //     </div>
// //   );
// // };
// // export default App;
