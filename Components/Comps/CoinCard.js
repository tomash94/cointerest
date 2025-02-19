import { StyleSheet, Text, View, Image,TouchableOpacity} from "react-native";
import React, { useState, useEffect } from "react";

import pic from "../../assets/BTC.png";

const CoinCard = (props) => {
  const btnCliked=()=>{
    alert("1");
  };
  const [colorText, setColorText] = useState({
    color: "blue",
  });


  return (
    <TouchableOpacity style={styles.container} onPress={()=> {
      btnCliked(props.text)
    }}>
  
      <View style={styles.Coin}>
        <Image source={pic} style={styles.img} />
      </View>
      <View style={styles.CoinInfo}>
        <Text style={styles.coinName}>{props.name}</Text>
      </View>
      <View style={styles.CoinGraph}>
        <Text style={styles.coinName}></Text>
      </View>
      <View style={styles.Precent}>
      <Text style={styles.coinName}>{props.value} $</Text>
        <Text style={styles.coinPrecent}>-1.7%</Text>
      </View>

    </TouchableOpacity>


  );
};

export default CoinCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "15%",
    
    //flex: 1,
    marginTop: "5%",
    width: "92%",
    alignSelf: "center",
    backgroundColor: "#1C1C1C",
   
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  Coin: {
    flexDirection: "column",
    flex: 0.3,
    justifyContent:"center",
   
  },
  CoinInfo: {
    flexDirection: "column",
    flex: 0.3,
    
  },
  CoinGraph: {
    flexDirection: "column",
    flex: 0.05,
    
  },
  Precent: {
    flexDirection: "column",
    flex: 0.4,
    
  },
  coinName: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    top: "35%",
  },
  coinPrecent: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    top: "35%",
  },
  img: {
    //marginTop:2,
    alignSelf: "center",
    width: 40,
    height: 40,
  },
});
