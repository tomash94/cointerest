import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SettingBtnComp = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <View style={styles.text}>
          <Text style={styles.headerTxt}>{props.text}</Text>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={props.icon}
            color={"white"}
            size={30}
            style={{ left: "230%", alignSelf: "center" }}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingBtnComp;

const styles = StyleSheet.create({
  container: {
    flex: 0.16,
    width: "95%",
    alignSelf: "center",
    marginBottom: 10,
  },
  balance: {
    flexDirection: "row",
    backgroundColor: "#6136DA",
    flex: 0.8,
    alignSelf: "center",
    borderRadius: 10,
    width: "95%",
  },
  text:{
    flexDirection: "row",
    flex: 0.7,
    alignSelf: "center",
  },
  icon:{
    flexDirection: "row",
    flex: 0.7,
    alignSelf: "center",
  },

  headerTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    left: "50%",
    //justifyContent: "flex-start",
    //alignSelf: "center",
  },
});
