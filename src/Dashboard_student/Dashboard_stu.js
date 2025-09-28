import React from "react";
import styles from "../Styles/Styles_dash-stu";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function Dashboard_stu({ route }) {
  const { user } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>รหัส {user || "0000000111"}</Text>
        <Text style={styles.headerText}>ชื่อ ตั้งใจ เรียนนะ</Text>
        <Text style={styles.headerText}>ชั้นปีการศึกษา 2/2558</Text>
      </View>

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

      <View style={styles.detail}>
        <Text>วันที่และเวลา ณ ขณะลงชื่อ</Text>
        <Text>รหัสวิชา วิชา / รายวิชา</Text>
        <Text>ห้องเรียน / สถานที่เรียน</Text>
        <Text>ชื่ออาจารย์ผู้สอน</Text>
        <Text>รหัสนักเรียน</Text>
        <Text>ชื่อ - สกุล</Text>
      </View>

      <TouchableOpacity style={styles.actionBtn}>
        <Text>แบบฝึกหัด</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}>
        <Text>การบ้าน</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
