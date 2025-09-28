import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    marginVertical: 10,
  },
  tab: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginRight: 6,
    cursor: "pointer", // ✅ ใช้งานบนเว็บ
  },
  activeTab: {
    backgroundColor: "#cce5ff",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  statusBox: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 10,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },
  detail: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  actionBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 6,
    padding: 12,
    alignItems: "center",
    marginVertical: 6,
    cursor: "pointer", // ✅ ใช้งานบนเว็บ
  },
});

export default styles;
