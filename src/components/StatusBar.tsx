import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Theme";

export const StatusBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>9:41</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.icon} />
        <View style={styles.icon} />
        <View style={styles.batteryIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    width: "100%",
  },
  timeContainer: {
    paddingHorizontal: 8,
  },
  timeText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFF",
    letterSpacing: -0.3,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    width: 17,
    height: 11,
    backgroundColor: "#FFF",
    opacity: 0.4,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    backgroundColor: "#FFF",
    borderRadius: 2,
  },
});