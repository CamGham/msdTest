import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, StatusBar} from "react-native";
import {Camera} from "expo-camera";
import React, {useState, useEffect} from "react";
import Ionicons from "react-native-vector-icons/Ionicons"


const LiveCamera = ({setShowLiveCamera}) => {
const handleBack = () =>{
    setShowLiveCamera(false);
};

const [hasPermission, setHasPermission] = useState(null);

useEffect(() => {
    (async () => {
      //on load get camera premissions
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");

    
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

return(
<KeyboardAvoidingView style={styles.container}>
<StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
            
            <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.back} onPress={handleBack}>
        <Ionicons
              name={"arrow-back"}
              size={40}
              color={"#0094FF"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginLeft:10,
                height: "170%",
                
              }}
            />
          {/* <Text style={styles.buttonText}>Back</Text> */}
        </TouchableOpacity>
        </View>
        <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={Camera.Constants.Type.back}/>
        </View>
        </KeyboardAvoidingView>
)
}
export default LiveCamera;


const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        zIndex:10000,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        width:"100%"
    },
    cameraContainer:{
        // flex:4,
        width:"100%",
        height:"100%",
        alignItems:"center",
        // justifyContent:"center",
    },
    back:{
        position:"absolute",
        
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor:"white",
    },
    button:{
        width: "70%",
        height: "50%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "#0094FF",
        borderWidth: 2,
        margin:10,
        width: "70%",
    },
    camera:{
        width:"100%",
        flex:1,
    }
})