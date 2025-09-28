import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  headerText: { fontSize: 14, fontWeight: "bold" },
  menuBtn: { padding: 5 },
  tabs: { flexDirection: "row", marginVertical: 10 },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#ddd",
  },
  activeTab: { backgroundColor: "#f08080" },
  tabText: { fontSize: 14, fontWeight: "500" },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBtn: {
    backgroundColor: "#ff6347",
    padding: 10,
    borderRadius: 6,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  editBtn: {
    backgroundColor: "#ffa500",
    padding: 6,
    borderRadius: 6,
  },
  form: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginTop: 10,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  addBtn: {
    marginTop: 15,
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default styles;
