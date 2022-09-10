import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { firestore } from "../firebase/firestore";
import { showMessage } from "react-native-flash-message";



const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [statusBarColour, setStatusBarColour] = useState("#0094FF");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Dashboard");
      }
    });
    return unsubscribe;
  }, []);

  const addUser = () => {
    const userId = email.toLowerCase();
    firestore
      .collection("users")
      .doc(userId)
      .set({
        name: name,
        email: userId,
      })
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const getUsers = () => {
    let exists = false;
    firestore
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size != 0) {
          exists = true;
          console.log("This user does exist");
        }
      })
      .catch((error) => console.log(error));

    return exists;
  };

  const timeout= () =>{
    setTimeout(() => {
      setStatusBarColour("#0094FF");
    }, 2050);
  }

  const handleRegister = () => {
    if (name.length < 2) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Name must be at least 2 characters!",
        type: "danger",
      });
      timeout();
    } else if (name.length > 12) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Name must be 12 characters or less!",
        type: "danger",
      });
      timeout();
    } else if (email.length == 0) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Please enter an email!",
        type: "danger",
      });
      timeout();
    } else if (!email.match(/\w+@[A-Za-z_]+\.[A-Za-z]{2,6}/)) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Please enter an email of the format: example@gmail.com",
        type: "danger",
      });
      timeout();
    } else if (password.length < 6) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Password must be at least 6 characters!",
        type: "danger",
      });
      timeout();
    } else if (password != confPassword) {
      setStatusBarColour("#d8534f");
      showMessage({
        message: "Passwords do not match! Please try again!",
        type: "danger",
      });
      timeout();
    } else {
      if (getUsers() == false) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            setStatusBarColour("#5cb85c");
            showMessage({
              message: "Account Created",
              type: "success",
            });
            timeout();
          })
          .catch((error) => {
            setStatusBarColour("#d8534f");
            showMessage({
              message: "Email already exists!",
              type: "danger",
            });
            timeout();
          });
        addUser();
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.view}>
      <StatusBar
      backgroundColor={statusBarColour}
      animated={true}
      />
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="grey"
          style={styles.text}
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          style={styles.text}
          value={confPassword}
          onChangeText={(text) => setConfPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderColor: "#0094FF",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "white",
    paddingLeft: 10,
    width: "100%",
  },
  button: {
    width: "70%",
    height: "25%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#0094FF",
    borderWidth: 2,
    margin: 10,
    width: "70%",
  },
  buttonContainer: {
    width: "70%",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    alignItems: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
