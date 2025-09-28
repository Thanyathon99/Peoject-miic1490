import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_student from "./src/Login/Login_student";
import Login_admin from "./src/Login/Login_admin";
import Login_teacher from "./src/Login/Login_teacher";
import Dashboard_stu from "./src/Dashboard_student/Dashboard_stu";
import Dashboard_teacher from "./src/Dashboard_teacer/Dashboard_tch";
import Dashboard_admin from "./src/Dashboard_admin/Dashboard_add";
import styles from "./src/Styles/Styles_app";

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
        <Stack.Screen name="AdminLogin" component={Login_admin} />

        {/* Dashboards */}
        <Stack.Screen
          name="DashboardStu"
          component={Dashboard_stu}
        />
        <Stack.Screen
          name="DashboardTeacher"
          component={Dashboard_teacher}
        />
        <Stack.Screen
          name="DashboardAdmin"
          component={Dashboard_admin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
