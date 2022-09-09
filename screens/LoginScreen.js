import { useNavigation } from "@react-navigation/native"
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from "react-native";
import React, {useState, useEffect} from  "react";
import { auth } from "../firebase/firebase";
import { showMessage } from "react-native-flash-message";

const LoginScreen = () =>{
    const navigation = useNavigation();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [statusBarColour, setStatusBarColour] = useState("#0094FF");

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Dashboard");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("Dashboard");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {setStatusBarColour("#d8534f");
      showMessage({
        message: "User does not exist!",
        type: "danger",
        // animationDuration:280,
        // floating:true,
      });
      timeout();});
  };

  const timeout= () =>{
    setTimeout(() => {
      setStatusBarColour("#0094FF");
    }, 2000);
  }

    return(
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar
      backgroundColor={statusBarColour}
      animated={true}
      />
            <View style={styles.textContainer}>
            <TextInput
    placeholder="Email"
    placeholderTextColor="grey"
    style={styles.text}
    value={email}
    onChangeText={(text) => setEmail(text)}
    keyboardType="email-address"
    />
    <TextInput
    placeholder="Password"
    placeholderTextColor="grey"
    style={styles.text}
    value={password}
    onChangeText={(text) => setPassword(text)}
    secureTextEntry
    />
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    buttonContainer:{
        width:"70%",
        alignItems:"center"
    },
    textContainer:{
        width:"70%",
        alignItems:"center"
    },
    buttonText:{

    },
    text:{
        borderWidth: 1,
        borderColor: "#0094FF",
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "white",
        paddingLeft: 10,
        width: "100%",
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"white",
    },
    button:{
        width: "70%",
        height: "25%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#0094FF",
        borderWidth: 2,
        margin:10,
        width: "70%",
    },
})