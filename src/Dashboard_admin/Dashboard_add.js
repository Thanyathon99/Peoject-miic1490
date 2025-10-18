import React, { useState } from "react";
import styles from "../Styles/Styles_dash-add";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function Dashboard_admin({ route }) {
  const { user } = route.params || {};
  const tabs = [
    "ข้อมูลนักเรียน",
    "ข้อมูลครู/อาจารย์",
    "ข้อมูลรายวิชา",
    "จัดการตารางเรียน",
    "จัดการสิทธิ์",
  ];

  // state สำหรับแท็บและแบบฟอร์ม
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState({ code: "", name: "", level: "" });

  // ฟอร์มนักเรียน (controlled)
  const [form, setForm] = useState({
    citizenId: "",
    fullName: "",
    birthDate: "",
    age: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    gradeLevel: "",
    gpa: "",
  });

  const students = Array.from({ length: 8 }, (_, i) => ({
    code: `000${i + 1}`,
    name: `นักเรียน ${i + 1}`,
    level: `ม.${(i % 6) + 1}`,
  }));

  const handleEdit = (s) => {
    // ตัวอย่าง: map ข้อมูลเข้าฟอร์ม
    setForm((prev) => ({
      ...prev,
      fullName: s.name,
      gradeLevel: s.level,
    }));
    // โฟกัสไปส่วนฟอร์ม
    setActiveTab(0);
  };

  const handleAddOrSave = () => {
    // TODO: เรียก API บันทึก
    alert("✅ บันทึกข้อมูลเรียบร้อย");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>รหัส 9876544</Text>
            <Text style={styles.headerText}>ชื่อ: ครูกานดา แอดมินธรรมดา</Text>
          </View>
          <Pressable style={styles.menuBtn}>
            <Text style={{ fontSize: 22 }}>☰</Text>
          </Pressable>
        </View>

        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}
        >
          {tabs.map((tab, i) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(i)}
              style={[styles.tab, activeTab === i && styles.activeTab]}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* --- เนื้อหาตามแท็บ --- */}
        {activeTab === 0 && (
          <>
            {/* Search Student */}
            <View style={styles.searchBox}>
              <TextInput
                style={styles.input}
                placeholder="รหัส"
                value={search.code}
                onChangeText={(t) => setSearch((p) => ({ ...p, code: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="ชื่อ"
                value={search.name}
                onChangeText={(t) => setSearch((p) => ({ ...p, name: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="ระดับชั้น"
                value={search.level}
                onChangeText={(t) => setSearch((p) => ({ ...p, level: t }))}
              />
              <Pressable
                style={styles.searchBtn}
                onPress={() => alert("ค้นหา…")}
              >
                <Text style={{ color: "#fff" }}>ค้นหา</Text>
              </Pressable>
            </View>

            {/* Student List */}
            <View style={styles.table}>
              {students.map((s) => (
                <View key={s.code} style={styles.row}>
                  <Text style={{ flex: 1 }}>{s.code}</Text>
                  <Text style={{ flex: 2 }}>{s.name}</Text>
                  <Pressable
                    style={styles.editBtn}
                    onPress={() => handleEdit(s)}
                  >
                    <Text style={{ color: "#fff" }}>แก้ไข</Text>
                  </Pressable>
                </View>
              ))}
            </View>

            {/* Student Info Form */}
            <View style={styles.form}>
              <Text style={styles.sectionTitle}>📌 ข้อมูลพื้นฐานนักเรียน</Text>
              <TextInput
                style={styles.input}
                placeholder="รหัสบัตรประชาชน"
                value={form.citizenId}
                onChangeText={(t) => setForm((p) => ({ ...p, citizenId: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="ชื่อ - นามสกุล"
                value={form.fullName}
                onChangeText={(t) => setForm((p) => ({ ...p, fullName: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="วัน/เดือน/ปีเกิด"
                value={form.birthDate}
                onChangeText={(t) => setForm((p) => ({ ...p, birthDate: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="อายุ"
                value={form.age}
                keyboardType="number-pad"
                onChangeText={(t) => setForm((p) => ({ ...p, age: t }))}
              />

              <Text style={styles.sectionTitle}>📞 ข้อมูลติดต่อ</Text>
              <TextInput
                style={styles.input}
                placeholder="เบอร์โทร"
                value={form.phone}
                keyboardType="phone-pad"
                onChangeText={(t) => setForm((p) => ({ ...p, phone: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="อีเมล"
                value={form.email}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(t) => setForm((p) => ({ ...p, email: t }))}
              />

              <Text style={styles.sectionTitle}>🏠 ที่อยู่</Text>
              <TextInput
                style={styles.input}
                placeholder="บ้านเลขที่ / หมู่ / ถนน"
                value={form.address1}
                onChangeText={(t) => setForm((p) => ({ ...p, address1: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="จังหวัด / อำเภอ / ตำบล"
                value={form.address2}
                onChangeText={(t) => setForm((p) => ({ ...p, address2: t }))}
              />

              <Text style={styles.sectionTitle}>🎓 การศึกษา</Text>
              <TextInput
                style={styles.input}
                placeholder="ระดับชั้น"
                value={form.gradeLevel}
                onChangeText={(t) => setForm((p) => ({ ...p, gradeLevel: t }))}
              />
              <TextInput
                style={styles.input}
                placeholder="ผลการเรียน (GPA)"
                value={form.gpa}
                keyboardType="decimal-pad"
                onChangeText={(t) => setForm((p) => ({ ...p, gpa: t }))}
              />

              <Pressable style={styles.addBtn} onPress={handleAddOrSave}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  เพิ่ม/บันทึกข้อมูล
                </Text>
              </Pressable>
            </View>
          </>
        )}

        {activeTab === 1 && (
          <Text style={{ padding: 16 }}>หน้าจัดการข้อมูลครู/อาจารย์</Text>
        )}
        {activeTab === 2 && (
          <Text style={{ padding: 16 }}>หน้าจัดการข้อมูลรายวิชา</Text>
        )}
        {activeTab === 3 && (
          <Text style={{ padding: 16 }}>หน้าจัดการตารางเรียน</Text>
        )}
        {activeTab === 4 && (
          <Text style={{ padding: 16 }}>หน้าจัดการสิทธิ์</Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
