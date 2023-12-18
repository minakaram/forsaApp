import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Writing from "./Writing";
import { strings } from "../../translations/localLanguagesController";

const InfoComplition = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Writing />
        <View style={styles.textContainer}>
          <Text style={[styles.textStyle, { fontWeight: "bold" }]}>
            {strings("limit")}
          </Text>
          <Text style={styles.textStyle}>{strings("infoand")}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#FFC709",
    padding: 15,
    borderRadius: 13,
  },
  textContainer: {
    marginLeft: 10,
  },
  textStyle: {
    color: "#FFC709",
  },
});
export default InfoComplition;
