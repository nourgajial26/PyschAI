import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/Home";
import VRScreen from "./screens/VR";
import LearnScreen from "./screens/Learn";
import LoadingScreen from "./screens/Loading";
// import { LogBox } from 'react-native';
// LogBox.ignoreAllLogs();
export default function App() {
  const Stack = createNativeStackNavigator();

  return(<NativeBaseProvider>
    {/* <Box backgroundColor={"#FED7D7"} flex={1}>

</Box> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false,
            }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="VR" component={VRScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>)
}