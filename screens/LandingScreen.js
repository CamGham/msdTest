import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const navigation = useNavigation();

    const handleRegister = () => {
      navigation.navigate("Register");
    }
    const handleLogin = () =>{
      navigation.navigate("Login");
    }




  return (
    <KeyboardAvoidingView style={styles.view}>
        <View style={styles.imageContainer}>
            <Text>Image here</Text>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  loginButton: {
    width: "70%",
    height: "18%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#0094FF",
    borderWidth: 2,
    margin: 10,
  },
  registerButton: {
    width: "70%",
    height: "18%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#0094FF",
    borderWidth: 2,
    margin:10,
  },
  buttonText: {
    // color: "white",
    color: "black",
    // fontFamily: 'Segeo_UI',
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  imageContainer:{
    flex:1,
    // backgroundColor: "red",
    paddingVertical: 50,
  },
  buttonContainer: {
    flex:2,
    width: "80%",
    alignItems: "center",
    // backgroundColor: "yellow",
    paddingTop: 50,
    // height:"",
  },
});
