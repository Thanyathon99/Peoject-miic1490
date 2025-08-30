import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_student from "./src/Login/Login_student";
import Login_addmin from "./src/Login/Login_addmin";
import Login_teacher from "./src/Login/Login_teacher";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Text style={styles.text}>Login For Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TeacherLogin")}
      >
        <Text style={styles.text}>Login For Teacher</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AdminLogin")}
      >
        <Text style={styles.text}>Login For Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StudentLogin" component={Login_student} />
        <Stack.Screen name="TeacherLogin" component={Login_teacher} />
        <Stack.Screen name="AdminLogin" component={Login_addmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  button: {
    width: 200,
    paddingVertical: 14,
    borderRadius: 25, //
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#000000ff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
