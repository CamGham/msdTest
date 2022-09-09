import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import VideoNav from "./VideoNav";
import ResultsScreen from "./ResultsScreen";
import React, {useState, useEffect} from "react";

const Tab = createBottomTabNavigator();
const homeScreen = "Home";
const videoScreen = "Video";
const resultsScreen = "Results";

const NavBar = () => {
  const [showLiveCamera, setShowLiveCamera] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

return(
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === homeScreen) {
            iconName = focused ? "home" : "home-outline";
          }else if(routeName === videoScreen){
            iconName = focused ? "videocam" : "videocam-outline";
          }else if(routeName === resultsScreen){
            iconName = focused ? "basketball" : "basketball-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={40}
              color={"#0094FF"}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 70,
                height: "170%",
              }}
            />
          );
        },
        // tabBarActiveTintColor: "white",
        // tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderRadius: 15,
          borderColor:"#0094FF",
          borderWidth: 3,
          backgroundColor: "white",

          //fix top
          borderTopWidth:3,
          borderTopColor: "#0094FF",

          //fix bottom corners
          borderBottomLeftRadius:16,
          borderBottomRightRadius:16,
          
          height: 65,
          marginTop:20,
        },
      })}
    >
        <Tab.Screen name = {resultsScreen}>
            {() => (<ResultsScreen/>)}
        </Tab.Screen>
        <Tab.Screen name={homeScreen}>
        {() => (<HomeScreen/>)}

        </Tab.Screen>
        <Tab.Screen name={videoScreen}>
            {() => (<VideoNav 
            showLiveCamera={showLiveCamera}
            setShowLiveCamera={setShowLiveCamera}
            showGallery={showGallery}
            setShowGallery={setShowGallery}/>)}
        </Tab.Screen>
        
    </Tab.Navigator>
)

}

export default NavBar;