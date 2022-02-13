import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import CameraComp from "./CameraComp";
const apiUrl = "http://194.90.158.74/bgroup53/test2/tar4/api/Users/?email=";

const SettingsHeader = (props) => {
  const [state, setState] = useState({
    isVisible: false,
  });
  const [user, setUser] = useState();
  const [profileImg, setProfileImg] = useState();
  const [bio, setBio] = useState();



  const getData = (data)=>{
    displayModal(!state.isVisible);
    };
    
  // hide show modal
  const displayModal = (show) => {
    setState({ isVisible: show });
  };

  const getUser = () => {
    fetch(apiUrl + props.email + "&n=1", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        //console.log('res=', res);
        console.log("res.status ", res.status);
        console.log("res.ok ", res.ok);
        return res.json();
      })
      .then(
        (result) => {
          setUser(result.Username);
          setProfileImg(result.Image);
          setBio(result.bio)
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.header}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={state.isVisible}
        onRequestClose={() => {
          displayModal(!state.isVisible);
        }}
      >
        <CameraComp sendData={getData} />
      </Modal>
      <TouchableOpacity
        onPress={() => {
          displayModal(true);
        }}
      >
        <View style={styles.profileIcon}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            color={"white"}
            size={50}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.UserInfo}>
        <Text style={styles.Username}>{user}</Text>
        <Text style={styles.UserBio}>{bio}</Text>
      </View>
    </View>
  );
};

export default SettingsHeader;

const styles = StyleSheet.create({
  // container: {
  //   padding: 25,
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // button: {
  //   display: 'flex',
  //   height: 60,
  //   borderRadius: 6,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '100%',
  //   backgroundColor: '#2AC062',
  //   shadowColor: '#2AC062',
  //   shadowOpacity: 0.5,
  //   shadowOffset: {
  //     height: 10,
  //     width: 0
  //   },
  //   shadowRadius: 25,
  // },
  // closeButton: {
  //   display: 'flex',
  //   height: 60,
  //   borderRadius: 6,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#FF3974',
  //   shadowColor: '#2AC062',
  //   shadowOpacity: 0.5,
  //   shadowOffset: {
  //     height: 10,
  //     width: 0
  //   },
  //   shadowRadius: 25,
  // },
  // buttonText: {
  //   color: '#FFFFFF',
  //   fontSize: 22,
  // },
  // image: {
  //   marginTop: 150,
  //   marginBottom: 10,
  //   width: '100%',
  //   height: 350,
  // },
  // text: {
  //   fontSize: 24,
  //   marginBottom: 30,
  //   padding: 40,
  // },
  closeText: {
    color: "white",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 4,
    width: "20%",
    backgroundColor: "black",
    left: "40%",
    bottom: "1%",
  },
  header: {
    flexDirection: "column",
    flex: 0.4,
    top: "6%",
    alignItems: "center",
  },
  profileIcon: {
    flexDirection: "column",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 2,
  },
  UserInfo: {
    top: "5%",
    alignItems: "center",
  },
  Username: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  UserBio: {
    color: "#C7C7C7",
    fontWeight: "500",
    fontSize: 15,
  },
});
