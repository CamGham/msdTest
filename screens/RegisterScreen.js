import { useNavigation } from "@react-navigation/native"
import { KeyboardAvoidingView, TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, {useState} from "react";


const RegisterScreen = () =>{
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const handleRegister = () => {
        navigation.navigate("Dashboard");
    }

    return(
<KeyboardAvoidingView style={styles.view}>
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
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    text:{
        borderWidth: 1,
        borderColor: "#0094FF",
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "white",
        paddingLeft: 10,
        width: "100%",
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
    buttonContainer:{
        width:"70%",
        alignItems:"center"
    },
    textContainer:{
        width:"70%",
        alignItems:"center"
    },
    view: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    }
})