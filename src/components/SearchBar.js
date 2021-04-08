import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { search } from "../redux/actions/searchAction";
import TagSearch from "./search/TagSearch";
import UserSearch from "./search/UserSearch";

const SearchBar = ({ search, searchData }) => {
  // console.log(searchData);
  const [modal, setModal] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword == "") {
      Alert.alert("Search", "Can't be Empty");
    } else if (keyword == " ") {
      Alert.alert("Search", "Space not allowed");
    } else if (keyword.startsWith(" ")) {
      Alert.alert("Search", "Space not allowed");
    } else {
      search(keyword);
      setKeyword("");
      setModal(true);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#f1f2f0",
          flexDirection: "row",
          borderRadius: 50,
          flex: 0.9,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search here..."
          style={{
            paddingHorizontal: 15,
            flex: 0.9,
            fontSize: 18,
            // fontSize: 15,
            // height: 40,
          }}
          returnKeyType="search"
          value={keyword}
          onChangeText={(keyword) => setKeyword(keyword)}
        />
        <TouchableOpacity style={{ flex: 0.1 }} onPress={() => handleSearch()}>
          <FontAwesome name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={{ flex: 1 }}>
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
            <Text style={{ paddingLeft: 10, fontSize: 30 }}>Search</Text>
          </View>
          {searchData.loading ? (
            <ActivityIndicator
              size={"small"}
              animating={true}
              color={"black"}
              style={{ padding: 10 }}
            />
          ) : searchData.searchData.value === "userInfo" ? (
            <UserSearch data={searchData.searchData.usersearchres} />
          ) : (
            <TagSearch data={searchData.searchData.tagssearchres} />
          )}
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchData: state.searchState,
  };
};

export default connect(mapStateToProps, { search })(SearchBar);

const styles = StyleSheet.create({});
