import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import VideoNav from "./VideoNav";
import ResultsScreen from "./ResultsScreen";
import React, { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const homeScreen = "Home";
const videoScreen = "Video";
const resultsScreen = "Results";

const NavBar = () => {
  const [showLiveCamera, setShowLiveCamera] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(homeScreen);

  


  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      backBehavior={"initialRoute"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          
          if (routeName === homeScreen) {
            iconName = focused ? "home" : "home-outline";
          } else if (routeName === videoScreen) {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (routeName === resultsScreen) {
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
                marginTop: 60,
                height: "170%",
              }}
            />
          );
        },
        
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderRadius: 15,
          borderColor: "#0094FF",
          borderWidth: 2,
          backgroundColor: "white",

          //fix top
          borderTopWidth: 2,
          borderTopColor: "#0094FF",

          height: 65,
          marginTop: 20,
        },
      })}
    >
      <Tab.Screen name={resultsScreen}>{() => <ResultsScreen />}</Tab.Screen>
      <Tab.Screen name={homeScreen}>{() => <HomeScreen />}</Tab.Screen>
      <Tab.Screen name={videoScreen}>
        {() => (
          
          <VideoNav
            showLiveCamera={showLiveCamera}
            setShowLiveCamera={setShowLiveCamera}
            showGallery={showGallery}
            setShowGallery={setShowGallery}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavBar;
