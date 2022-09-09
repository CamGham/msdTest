import { KeyboardAvoidingView, StatusBar } from "react-native";

const HomeScreen = () =>{
return(
    <KeyboardAvoidingView>
        <StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
    </KeyboardAvoidingView>
)

}
export default HomeScreen;