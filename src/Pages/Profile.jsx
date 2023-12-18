import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Share,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HeartSVG from "../components/Header/HeartSVG";
import Notification from "../components/Header/Notification";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "../components/Dropown";
import { strings } from "../translations/localLanguagesController";
const Profile = () => {
  const [value, setValue] = useState("English");
  const data = [
    { label: "English", value: "English" },
    { label: "Arabic", value: "Arabic" },
  ];

  const onShare = async () => {
    try {
      await Share.share({
        message: "Check out the latest offers!",
      });
    } catch (error) {
      console.error("Error sharing content:", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.clipPath}
        source={require("./Ellipse-profile.png")}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.profileHeading}>{strings('profile')}</Text>
          <View style={styles.navIconContainer}>
            <HeartSVG />
            <Notification />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 30,
          marginLeft: 18,
          marginTop: 40,
        }}
      >
        <View>
          <Image source={require("../components/media/images/profile.png")} />
        </View>
        <Text style={styles.username}>Mohammed Adel</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.buttonTxt}>{strings('share_app')}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 14.71,
          }}
        >
          <TouchableOpacity>
            <Text style={styles.buttonTxt}>{strings('change_language')}</Text>
          </TouchableOpacity>
          <DropdownComponent />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  clipPath: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
  },
  navIconContainer: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "flex-end",
  },
  favIcon: { width: 25.82, height: 22.97 },
  alertIcon: { width: 22.68, height: 23, marginLeft: 10 },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 47,
  },
  profileHeading: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29.05,
    color: "white",
    width: "50%",
    textAlign: "right",
  },
  imgProfile: { width: 98, height: 82, borderRadius: 8 },
  username: {
    fontSize: 21,
    fontWeight: "400",
    lineHeight: 25,
    textAlign: "center",
    marginTop: -5,
  },
  buttonsContainer: { paddingVertical: 5, paddingHorizontal: 19, marginTop: 5 },
  buttonTxt: { fontSize: 18, fontWeight: "400" },
  lang: { fontWeight: "500" },
  dropdown: {
    height: 35,
    width: 150,
    paddingHorizontal: 7,
    borderBottomColor: "gray",
    borderWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 16,
  },
  itemTextStyle: {
    height: 20,
  },
});

export default Profile;
