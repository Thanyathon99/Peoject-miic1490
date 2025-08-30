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
      <Image
        source={require("./assets/rotation.png")}
        style={{ width: 100, height: 100 }}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#7c7c7cff" }]}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Text style={styles.text}>Login For Student</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#7c7c7cff" }]}
        onPress={() => navigation.navigate("TeacherLogin")}
      >
        <Text style={styles.text}>Login For Teacher</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#7c7c7cff" }]}
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
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  button: {
    width: 220,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
