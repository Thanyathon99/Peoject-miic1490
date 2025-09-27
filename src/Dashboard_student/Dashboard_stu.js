import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function AttendanceScreen({ route }) {
  const { user } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>รหัส 0000000111</Text>
        <Text style={styles.headerText}>ชื่อ ตั้งใจ เรียนนะ</Text>
        <Text style={styles.headerText}>ชั้นปีการศึกษา 2/2558</Text>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {[
          "เช็กชื่อ",
          "ตารางเรียน",
          "คะแนนรายวิชา",
          "ผลการเรียน GPA",
          "สถิติการเข้าเรียน",
        ].map((tab, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.tab, i === 0 && styles.activeTab]}
          >
            <Text>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Status */}
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>สถานะ: เข้าเรียนแล้ว</Text>
      </View>

      {/* Detail */}
      <View style={styles.detail}>
        <Text>วันที่และเวลา ณ ขณะลงชื่อ</Text>
        <Text>รหัสวิชา วิชา / รายวิชา</Text>
        <Text>ห้องเรียน / สถานที่เรียน</Text>
        <Text>ชื่ออาจารย์ผู้สอน</Text>
        <Text>รหัสนักเรียน</Text>
        <Text>ชื่อ - สกุล</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.actionBtn}>
        <Text>แบบฝึกหัด</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <Text>การบ้าน</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ddd", padding: 10 },
  header: { alignItems: "center", marginBottom: 10 },
  headerText: { fontSize: 14, fontWeight: "bold" },
  tabs: { flexDirection: "row", marginVertical: 10 },
  tab: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  activeTab: { backgroundColor: "#cce5ff" },
  statusBox: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 10,
  },
  statusText: { color: "#fff", fontWeight: "bold" },
  detail: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
  actionBtn: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
  },
});
