import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import {
  getAppLanguage,
  strings,
} from "../../translations/localLanguagesController";

const AdditionalLoan = () => {
  const [loans, setLoans] = useState([]);
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const responseData = await axios.get(
          "https://forsa-staging.bit68.com/api/v1/onetransaction/myservicetypes/"
        );
        const data = responseData.data.results;
        setLoans(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoans();
  }, []);
  return (
    <View>
      <View style={styles.headingBox}>
        <Text style={styles.header}>{strings("request_loan")}</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: 600 }}>{strings("see_less")}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {loans && (
          <FlatList
            numColumns={2}
            data={loans}
            renderItem={({ item, index }) => (
              <ImageBackground
                source={require("./Vector.png")}
                style={{ margin: 5, borderRadius: 20 }}
              >
                <View style={[styles.loanSection]}>
                  <View style={styles.loanContainer}>
                    <Text style={styles.loanLabel}>
                      {getAppLanguage() === "ar" ? item.name_ar : item.name}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loanSection: {
    alignSelf: "center",
  },
  loanContainer: {
    width: 170,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loanLabel: {
    color: "white",
    textAlign: "center",
  },
  headingBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    marginBottom: 16,
    marginTop: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default AdditionalLoan;
