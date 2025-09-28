import React from "react";
import styles from "../Styles/Styles_dash-add";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

export default function Dashboard_admin({ route }) {
  const { user } = route.params || {};
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          source={require("../../assets/avatar.png")}
          style={styles.avatar}
        /> */}
        <View>
          <Text style={styles.headerText}>รหัส 9876544</Text>
          <Text style={styles.headerText}>ชื่อ: ครูกานดา แอดมินธรรมดา</Text>
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
        {[
          "ข้อมูลนักเรียน",
          "ข้อมูลครู/อาจารย์",
          "ข้อมูลรายวิชา",
          "จัดการตารางเรียน",
          "จัดการสิทธิ์",
        ].map((tab, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.tab, i === 0 && styles.activeTab]}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Student */}
      <View style={styles.searchBox}>
        <TextInput style={styles.input} placeholder="รหัส" />
        <TextInput style={styles.input} placeholder="ชื่อ" />
        <TextInput style={styles.input} placeholder="ระดับชั้น" />
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={{ color: "#fff" }}>ค้นหา</Text>
        </TouchableOpacity>
      </View>

      {/* Student List */}
      <View style={styles.table}>
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.row}>
            <Text style={{ flex: 1 }}>000{i + 1}</Text>
            <Text style={{ flex: 2 }}>นักเรียน {i + 1}</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={{ color: "#fff" }}>แก้ไข</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Student Info Form */}
      <View style={styles.form}>
        <Text style={styles.sectionTitle}>📌 ข้อมูลพื้นฐานนักเรียน</Text>
        <TextInput style={styles.input} placeholder="รหัสบัตรประชาชน" />
        <TextInput style={styles.input} placeholder="ชื่อ - นามสกุล" />
        <TextInput style={styles.input} placeholder="วัน/เดือน/ปีเกิด" />
        <TextInput style={styles.input} placeholder="อายุ" />

        <Text style={styles.sectionTitle}>📞 ข้อมูลติดต่อ</Text>
        <TextInput style={styles.input} placeholder="เบอร์โทร" />
        <TextInput style={styles.input} placeholder="อีเมล" />

        <Text style={styles.sectionTitle}>🏠 ที่อยู่</Text>
        <TextInput style={styles.input} placeholder="บ้านเลขที่ / หมู่ / ถนน" />
        <TextInput style={styles.input} placeholder="จังหวัด / อำเภอ / ตำบล" />

        <Text style={styles.sectionTitle}>🎓 การศึกษา</Text>
        <TextInput style={styles.input} placeholder="ระดับชั้น" />
        <TextInput style={styles.input} placeholder="ผลการเรียน (GPA)" />

        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>เพิ่มข้อมูล</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
