import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from "react-native";

const CameraGallery = ({setShowGallery}) => {

const handleBack = () =>{
    setShowGallery(false);
};

return(
<KeyboardAvoidingView style={styles.container}>
            
            <Text>Gallery</Text>
            <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
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