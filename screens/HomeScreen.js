import { KeyboardAvoidingView, StatusBar } from "react-native";
import React, {useState, useEffect} from "react";

const HomeScreen = () =>{
  const [statusBarColour, setStatusBarColour] = useState("#5cb85c");

  useEffect(() => {timeout()}, [])

  const timeout = () => {
    setTimeout(() => {
      setStatusBarColour("#0094FF");
    }, 2250);
  };
return(
    <KeyboardAvoidingView>
        <StatusBar
      backgroundColor={statusBarColour}
      animated={true}
      />
    </KeyboardAvoidingView>
)

}
export default HomeScreen;