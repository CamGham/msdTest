import {
    KeyboardAvoidingView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";

const VideoScreen = ({setShowLiveCamera, setShowGallery}) =>{
    const navigation = useNavigation();

    const handleShowCamera = () =>{
        setShowLiveCamera(true);
    }

    const handleShowGallery = () =>{
        setShowGallery(true);
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleShowCamera}>
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShowGallery}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default VideoScreen;

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