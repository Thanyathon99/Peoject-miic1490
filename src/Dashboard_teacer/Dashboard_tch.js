import React from "react";
import styles from "../Styles/Styles_dash-tch";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

export default function Dashboard_teacher({ route }) {
  const { user } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          source={require("../../assets/avatar.png")} // 👈 ใส่รูปแทน
          style={styles.avatar}
        /> */}
        <View>
          <Text style={styles.headerText}>รหัส 0000000111</Text>
          <Text style={styles.headerText}>ชื่อ ตั้งใจ เรียนนะ</Text>
        </View>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={{ fontSize: 22 }}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {["เช็กชื่อ", "รายชื่อ", "ตารางสอบ", "คะแนน", "ตรวจสอบ"].map(
          (tab, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.tab, i === 0 && styles.activeTab]}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          )
        )}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.body}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#4169E1" }]}
        >
          <Text style={styles.actionText}>สแกนใบหน้า</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#BA55D3" }]}
        >
          <Text style={styles.actionText}>ถ่ายภาพ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
