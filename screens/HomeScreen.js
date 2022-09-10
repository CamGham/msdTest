import { KeyboardAvoidingView, StatusBar, View, Text, StyleSheet } from "react-native";
import React, {useState, useEffect} from "react";
import {firestore} from "../firebase/firestore";
import {auth} from "../firebase/firebase";

const HomeScreen = () =>{
  const [statusBarColour, setStatusBarColour] = useState("#5cb85c");
  const [name, setName] = useState("");

  useEffect(() => {timeout(), getUserInfo()}, [])

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