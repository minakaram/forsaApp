import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Slider from "../slider/Slider";
import { AntDesign } from "@expo/vector-icons";
import KeySVG from "./KeySVG";
import HeartSVG from "./HeartSVG";
import Notification from "./Notification";
import InfoComplition from "./InfoComplition";
const Header = () => {
  return (
    <View style={{ width: "100%", height: 300 }}>
      <View style={styles.searchHeader}>
        <AntDesign name="search1" size={24} color="white" />
        <KeySVG></KeySVG>
        <View style={{ flexDirection: "row" }}>
          <HeartSVG />
          <Notification />
        </View>
      </View>
      <InfoComplition />
      <ImageBackground
        source={require("./elipsehome.png")}
        style={styles.backgroundImg}
      ></ImageBackground>

      <Slider />
    </View>
  );
};

const styles = StyleSheet.create({
  searchHeader: {
    width: "100%",
    zIndex: 2,
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  backgroundImg: {
    height: 300,
    width: "100%",
    position: "absolute",
    zIndex: -1,
  },
});

export default Header;
