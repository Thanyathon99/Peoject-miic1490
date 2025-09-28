import React, { useState } from "react";
import styles from "../Styles/Styles_log";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

export default function Login_teacher({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {
  if (username === "student" && password === "1234") {
    navigation.replace("DashboardStu", { user: username }); 
  } else {
    Alert.alert("❌ Login ไม่สำเร็จ", "กรุณาตรวจสอบ Username/Password");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Pressable
        style={({ pressed }) => [
          styles.loginBtn,
          { backgroundColor: pressed ? "#006400" : "green" }, // กดแล้วสีเข้มขึ้น
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.btnText}>เข้าสู่ระบบ</Text>
      </Pressable>
    </View>
  );
}
