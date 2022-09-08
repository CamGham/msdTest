import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator;
const homeScreen = "Home";

const NavBar = () => {
    // const navigation = useNavigation();

return(
    <Tab.Navigator
    initialRoute={homeScreen}
    >
        <Tab.Screen name={homeScreen}>
        {() => (<HomeScreen/>)}

        </Tab.Screen>
        
    </Tab.Navigator>
)

}

export default NavBar;