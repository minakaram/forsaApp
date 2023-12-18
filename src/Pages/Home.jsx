import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import SectorComponent from "../components/SectorComponent/SectorComponent";
import Offers from "../components/Offers/Offers";
import AdditionalLoan from "../components/AdditionalLoan/AdditionalLoan";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SectorComponent />
      <AdditionalLoan />
      <Offers />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 70,
    flex: 1,
    // alignItems: "center",
  },
});

export default Home;
