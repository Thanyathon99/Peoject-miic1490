import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginStudent({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "student" && password === "1234") {
      navigation.replace("Attendance", { user: username });
    } else {
      Alert.alert("❌ Login ไม่สำเร็จ", "กรุณาตรวจสอบ Username/Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>เข้าสู่ระบบสำหรับนักเรียน</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="กรอก Username"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="กรอก Password"
      />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Cancel ✖️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login ✔️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  label: { fontSize: 16, marginVertical: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#eee",
  },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  cancelBtn: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
