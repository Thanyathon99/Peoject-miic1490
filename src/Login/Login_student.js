import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../Styles/Styles_log";

export default function Login_student({ navigation }) {
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
      <Text style={styles.title}>🔑 Login (Student)</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => [styles.loginBtn, pressed && { opacity: 0.9 }]}
      >
        <Text style={styles.btnText}>เข้าสู่ระบบ</Text>
      </Pressable>
    </View>
  );
}
