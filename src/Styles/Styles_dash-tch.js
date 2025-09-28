import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  headerText: { fontSize: 14, fontWeight: "bold" },
  menuBtn: { padding: 5 },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    paddingVertical: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#ddd",
  },
  activeTab: { backgroundColor: "#dda0dd" },
  tabText: { fontSize: 14, fontWeight: "500" },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  actionBtn: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginVertical: 15,
    elevation: 5,
  },
  actionText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default styles;