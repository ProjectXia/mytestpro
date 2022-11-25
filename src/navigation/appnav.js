import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIN from "../screens/signin/signin";
import SignUP from "../screens/signup/signup";
import ForgotPassword from "../screens/forgotpass/forgotpass";

const Stack = createNativeStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="forgot" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUP} />
        <Stack.Screen name="Login" component={SignIN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { AppNav };
