import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import * as Linking from "expo-linking";
const HomeHeader = () => {
  const navigation = useNavigation();
  const onSettingsPressed = async () => {
    // Linking.openURL("wca://");
    navigation.navigate("Settings");
  };
  const onSearchPressed = () => {
    navigation.navigate("Search");
  };
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <Text style={styles.title}>Chats</Text>
      </View>
      <View style={styles.right}>
        <AntDesign
          onPress={onSearchPressed}
          name="search1"
          size={24}
          color="white"
          style={{ marginRight: 20 }}
        />
        <AntDesign
          onPress={onSettingsPressed}
          name="setting"
          size={24}
          color="white"
          style={{}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#3777f0",
    paddingVertical: 10,
    
  },
  left: {
    paddingHorizontal: 20,
  },

  title: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 20,
  },
  right: {
    marginLeft: "auto",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
export default HomeHeader;
