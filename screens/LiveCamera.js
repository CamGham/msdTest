import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, StatusBar} from "react-native";

const LiveCamera = ({setShowLiveCamera}) => {
const handleBack = () =>{
    setShowLiveCamera(false);
};

return(
<KeyboardAvoidingView style={styles.container}>
<StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
            <Text>Camera</Text>
            <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
)
}
export default LiveCamera;


const styles = StyleSheet.create({
    buttonContainer:{
        width:"70%",
        alignItems:"center"
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