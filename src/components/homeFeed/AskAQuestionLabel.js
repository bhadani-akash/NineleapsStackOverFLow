import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import Tags from "react-native-tags";

import { postQuestionAction } from "../../redux/actions/home/postQuestionAction";

const AskAQuestionLabel = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState();
  const [qstn, setQuestion] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let jsonValue = await AsyncStorage.getItem("userData");
        jsonValue = JSON.parse(jsonValue);
        // console.log("Stored user", jsonValue);
        setUser(jsonValue);
      } catch (e) {
        console.log("Display User Data Error:", e);
      }
    };
    getData();
  }, [user]);

  const submitQuestionToServer = () => {
    if (qstn == "") {
      Alert.alert("Ask a Question?", "Question can't be empty!");
    } else {
      const data = {
        user: user,
        question: qstn,
        tags: tags.join(" "),
      };
      dispatch(postQuestionAction(data));
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.askAQuestion}>Ask Question</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View
          style={{
            backgroundColor: "#EDEDED",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#c1def5",
              alignItems: "center",
              height: 70,
              paddingHorizontal: 10,
            }}
          >
            <Ionicons
              name="arrow-back"
              size={40}
              color="black"
              onPress={() => {
                setModal(false);
              }}
            />
            <Text style={{ fontSize: 30, paddingLeft: 10 }}>
              Ask a Question
            </Text>
          </View>
          <ScrollView
            style={{
              // flex: 1,
              backgroundColor: "#fff",
              paddingHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                marginTop: 15,
                borderWidth: 1,
                paddingHorizontal: 10,
                marginBottom: 10,
                textAlignVertical: "top",
              }}
              placeholder="Write a Question!"
              multiline={true}
              value={qstn}
              numberOfLines={5}
              onChangeText={(qstn) => setQuestion(qstn)}
            />
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                textDecorationLine: "underline",
              }}
            >
              Add Tags:
            </Text>
            <View style={{ paddingBottom: 10 }}>
              {/* <Text style={{ fontSize: 18 }}>Rules:</Text> */}
              <Text style={{ fontSize: 13 }}>1. Add up to 5 tags.</Text>
              <Text style={{ fontSize: 13 }}>2. Add space to enter Tags</Text>
              <Text style={{ fontSize: 13 }}>
                3. Tap on Tags to remove Tags
              </Text>
            </View>
            <Tags
              maxNumberOfTags={5}
              initialText=""
              textInputProps={{
                placeholder: "eg ( REACTNATIVE NODE EXPRESS )",
                autoCapitalize: "characters",
                autoCorrect: false,
              }}
              onChangeTags={(tags) => {
                setTags(tags);
                // console.log("current tags:", tags);
              }}
              onTagPress={(index, tagLabel, event, deleted) =>
                console.log(
                  index,
                  tagLabel,
                  //   event,
                  deleted ? "deleted" : "not deleted"
                )
              }
              containerStyle={{
                borderWidth: 1,
                padding: 3,
              }}
              inputStyle={{
                backgroundColor: "#9eaaad",
              }}
              renderTag={({
                tag,
                index,
                onPress,
                // deleteTagOnPress,
                // readonly,
              }) => (
                <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                  <View
                    style={{
                      backgroundColor: "lightgrey",
                      marginRight: 5,
                      padding: 5,
                      margin: 3,
                    }}
                  >
                    <Text>{tag}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <View
              style={{
                padding: 30,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  submitQuestionToServer();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>POST</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default AskAQuestionLabel;

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: "black",
    // borderColor: "grey",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  askAQuestion: {
    fontSize: 30,
    // color: "grey",
  },
  button: {
    height: 50,
    width: 100,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0895cc",
    // backgroundColor: "#9eaaad",
    borderWidth: 1,
    // borderColor: "black",
    // marginLeft: 5,
    // borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
