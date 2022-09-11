import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, StatusBar} from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, {useState, useEffect} from "react";

const CameraGallery = ({setShowGallery}) => {

const handleBack = () =>{
    setShowGallery(false);
};

const [video, setVideo] = useState(null);

const pickVideo = async () => {
    let result = ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing:true,
    })
    
    if(!(await result).cancelled)
    {
        setVideo(result.uri);
    }
}

return(
<KeyboardAvoidingView style={styles.container}>
<StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
            <Text>Gallery</Text>
            <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickVideo}>
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
)
}
export default CameraGallery;

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