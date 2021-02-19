import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Tab from '../navigation/Tab';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  //   console.log(state.routes);
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? 'black' : 'grey';

  //   console.log(state.index);
  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  //   console.log(state.routes);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  wrapper: {
    // position: "absolute",
    // bottom: 20,
    width: width,
    //   width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    // backgroundColor: "#e84a9c",
    // width: 250,
    justifyContent: 'space-between',
    // borderRadius: 100,
  },
});
