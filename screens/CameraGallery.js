import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from "expo-image-manipulator";
import * as ImageManipulator from "expo-image-manipulator";
import React, { useState, useEffect } from "react";

const CameraGallery = ({ setShowGallery }) => {
  const handleBack = () => {
    setShowGallery(false);
  };

  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState(null);

  const pickVideo = async () => {
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
    });

    if (!(await result).cancelled) {
      setVideo(result.uri);
    }
  };

  const pickImage = async () => {
    try{
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!(await result).cancelled) {
      // console.log(result);
      const manipResult = await ImageManipulator.manipulateAsync(
        result._3.uri,
        [{ resize: { width: 900 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      const source = { uri: manipResult.uri};
      setImage(source);
      setPredictions(null);
      console.log(image.uri);
    }
}catch(error)
{
    console.error(error);
}  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor={"#0094FF"} animated={true} />
      <Text>Gallery</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>
        {image && 
        <View>
        <Image source={{uri: image.uri }} style={{ flex: 1, width: 600 }} />
        </View>}
      </View>
    </KeyboardAvoidingView>
  );
};
export default CameraGallery;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "70%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
});
