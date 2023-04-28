import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Emerg from "./pages/Emergenci";
import NUser from "./pages/Newuser";

export default function Routes(){
    
    const Stack = createNativeStackNavigator();
        return (
      <NavigationContainer>
            <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
       <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Emerg" component={Emerg} />
       <Stack.Screen name="About" component={About} />
       <Stack.Screen name="NUser" component={NUser} /> 
     
       </Stack.Navigator>
    
     </NavigationContainer>
    );
    
    }