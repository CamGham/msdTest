import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import TableTwo from "./TableTwo";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const ResultsScreen = () => {
  const navigation = useNavigation();

  const onSwipe = (gestureName) => {
    const { SWIPE_LEFT } = swipeDirections;
    // setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_LEFT:
        navigation.navigate("Home");
        break;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(direction) => onSwipe(direction)}
      config={config}
      style={{
        flex: 1,
      }}
    >
      <KeyboardAvoidingView style={styles.view}>
        <StatusBar backgroundColor={"#0094FF"} animated={true} />
        <View>
          <TableTwo />
        </View>
      </KeyboardAvoidingView>
    </GestureRecognizer>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
});
