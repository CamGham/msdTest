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
import { FFmpegKit } from "ffmpeg-kit-react-native";
import * as FileSystem from "expo-file-system";

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
    console.log(result);
    if (!(await result).cancelled) {
      const source = { uri: result._3.uri };
      setVideo(source);
    }

    console.log(video);
    // await splitVideo();
  };

  // const splitVideo = async () =>{
  //   // ffmpeg -i input.mp4 -vf fps=1 out%d.png
  //   // ffmpeg -i input.flv -ss 00:00:14.435 -frames:v 1 out.png

  // //   FFmpegKit.execute(`-i ${video}.mp4 -vf fps=1 ${}%d.png`).then(async (session) => {
  // //     const returnCode = await session.getReturnCode();
  // // }

  // FFmpegKit.execute(`-i ${video}.mp4 -ss 00:00:00.000 -frames:v 1 ${image}.png`)
  //   .then(async (session) => {
  //       const returnCode = await session.getReturnCode();
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //   console.log(image);
  // };

  const pickImage = async () => {
    try {
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

        const source = { uri: manipResult.uri };
        setImage(source);
        setPredictions(null);
        // console.log(image.uri);

        await detectionAsync(image);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const detectionAsync = async (source) => {
    try {
      const fileUri = source.uri;
      // console.log(fileUri);

      //convert image to b64 string
      const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      // console.log(imgB64);

      //convert
      // const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
      // console.log(imgBuffer);

      // const raw = new Uint8Array(imgBuffer);
      // const imageTensor = imageToTensor(raw);
    } catch (error) {
      console.log("detect error: " + error);
    }
  };

  const imageToTensor = (raw) => {
    const { width, height, data } = jpeg.decode(raw, {
      useTArray: true,
    });

    const buffer = new Uint8Array(width * height * 3);
    let offset = 0;
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];

      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  };

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
        {image && (
          <View>
            <Image
              source={{ uri: image.uri }}
              style={{ flex: 1, width: 600 }}
            />
          </View>
        )}
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
