import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from "react-native";
import TableTwo from "./TableTwo";

const ResultsScreen = () =>{
    return (
        <KeyboardAvoidingView style={styles.view}>
<StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
      <View>
<TableTwo/>
      </View>
        </KeyboardAvoidingView>
    )
}

export default ResultsScreen;

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"white",
    }
})