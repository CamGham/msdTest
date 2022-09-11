import { KeyboardAvoidingView, StatusBar, View, Text, StyleSheet } from "react-native";
import React, {useState, useEffect} from "react";
import {firestore} from "../firebase/firestore";
import {auth} from "../firebase/firebase";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useNavigation } from "@react-navigation/native";



const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};


const HomeScreen = () =>{
  const [statusBarColour, setStatusBarColour] = useState("#5cb85c");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {timeout(), getUserInfo()}, [])

  

  const onSwipe = (gestureName) =>{
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    // setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_LEFT:
        navigation.navigate("Video");
        break;
      case SWIPE_RIGHT:
        navigation.navigate("Results");
        break;
    }
  }

  const getUserInfo = () => {
    firestore
      .collection("users")
      .doc(auth.currentUser?.email)
      .get()
      .then((documentSnapshot) => {
        let data = documentSnapshot.data();
        setName(data.name);
      })
      .catch((error) => console.log(error));
  };

  const timeout = () => {
    setTimeout(() => {
      setStatusBarColour("#0094FF");
    }, 2250);
  };
return(
  <GestureRecognizer
          onSwipe={(direction) => onSwipe(direction)}
        config={config}
        style={{
          flex: 1,
        }}
        >
    <KeyboardAvoidingView style={styles.container}>
        <StatusBar
      backgroundColor={statusBarColour}
      animated={true}
      />
      <View style={styles.greetingContainer}>
        <Text>Welcome {name}!</Text>
        <Text>Here are the results of your last three shots:</Text>
      </View>
    </KeyboardAvoidingView>
    </GestureRecognizer>
)

}
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
  },
  greetingContainer:{
    marginTop:80,
    marginLeft:40,
    marginRight: 40,
  }
})