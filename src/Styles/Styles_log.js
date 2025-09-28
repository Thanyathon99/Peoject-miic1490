import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // กลางแนวตั้ง
    alignItems: "center", // กลางแนวนอน
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: Platform.OS === "web" ? 400 : "80%", // ถ้าเว็บใช้ 400px ถ้ามือถือใช้ 80%
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  loginBtn: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: 200,
    // 👇 ทำให้ cursor เป็น pointer บนเว็บ
    ...(Platform.OS === "web" ? { cursor: "pointer" } : {}),
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
