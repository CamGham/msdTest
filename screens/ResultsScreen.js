import { KeyboardAvoidingView, StatusBar } from "react-native"

const ResultsScreen = () =>{
    return (
        <KeyboardAvoidingView>
<StatusBar
      backgroundColor={"#0094FF"}
      animated={true}
      />
        </KeyboardAvoidingView>
    )
}

export default ResultsScreen;