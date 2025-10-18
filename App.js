import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login_student from "./src/Login/Login_student";
import Login_teacher from "./src/Login/Login_teacher";
import Login_admin from "./src/Login/Login_admin";

import Dashboard_stu from "./src/Dashboard_student/Dashboard_stu";
import Dashboard_teacher from "./src/Dashboard_teacher/Dashboard_tch";
import Dashboard_admin from "./src/Dashboard_admin/Dashboard_add";

import styles from "./src/Styles/Styles_app";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/rotation.png")}
        style={{ width: 100, height: 100, marginBottom: 24 }}
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("StudentLogin")}
      >
        <Text style={styles.text}>Login For Student</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("TeacherLogin")}
      >
        <Text style={styles.text}>Login For Teacher</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("AdminLogin")}
      >
        <Text style={styles.text}>Login For Admin</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Select Role" }}
        />

        {/* Logins */}
        <Stack.Screen
          name="StudentLogin"
          component={Login_student}
          options={{ title: "Student Login" }}
        />
        <Stack.Screen
          name="TeacherLogin"
          component={Login_teacher}
          options={{ title: "Teacher Login" }}
        />
        <Stack.Screen
          name="AdminLogin"
          component={Login_admin}
          options={{ title: "Admin Login" }}
        />

        {/* Dashboards */}
        <Stack.Screen
          name="DashboardStu"
          component={Dashboard_stu}
          options={{ title: "Student Dashboard" }}
        />
        <Stack.Screen
          name="DashboardTeacher"
          component={Dashboard_teacher}
          options={{ title: "Teacher Dashboard" }}
        />
        <Stack.Screen
          name="DashboardAdmin"
          component={Dashboard_admin}
          options={{ title: "Admin Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
