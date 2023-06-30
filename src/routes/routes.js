import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Menu from "../screens/Menu";
import Donut from "../screens/Donut";
import Checkout from "../screens/Checkout";
import Finish from "../screens/Finish";

export default function Routes() {
    const StackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <StackNavigator.Navigator 
                screenOptions={{ 
                    headerShown: false
                }}
            >
                <StackNavigator.Screen name="Home" component={Home} />  
                <StackNavigator.Screen name="Register" component={Register} /> 
                <StackNavigator.Screen name="Login" component={Login} />
                <StackNavigator.Screen name="Menu" component={Menu} /> 
                <StackNavigator.Screen name="Donut" component={Donut} /> 
                <StackNavigator.Screen name="Checkout" component={Checkout} />  
                <StackNavigator.Screen name="Finish" component={Finish} />   
            </StackNavigator.Navigator>
        </NavigationContainer> 
    )
}