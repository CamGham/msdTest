import {
    KeyboardAvoidingView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    StatusBar,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

const VideoScreen = ({setShowLiveCamera, setShowGallery}) =>{
    const navigation = useNavigation();

    const handleShowCamera = () =>{
        setShowLiveCamera(true);
    }

    const handleShowGallery = () =>{
        setShowGallery(true);
    }

    const onSwipe = (gestureName) =>{
        const {SWIPE_RIGHT} = swipeDirections;
        // setGestureName(gestureName);
        switch (gestureName) {
          case SWIPE_RIGHT:
            navigation.navigate("Home");
            break;
          
        }
      }

    return(
        <GestureRecognizer
          onSwipe={(direction) => onSwipe(direction)}
        config={config}
        style={{
          flex: 1,
        }}
        >
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleShowCamera}>
          <Text style={styles.buttonText}>Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShowGallery}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </GestureRecognizer>
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