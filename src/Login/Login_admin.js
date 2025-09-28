import React, { useState } from "react";
import styles from "../Styles/Styles_log";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

export default function Login_addmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigation.replace("DashboardAdmin", { user: username });
    } else {
      Alert.alert("❌ Login ไม่สำเร็จ", "กรุณาตรวจสอบ Username/Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔑 Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
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

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    </View>
  );
}
