import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function BButton({ title = "title", bgColor = "red", onPressChange }) {
  return (
    <TouchableOpacity
      onPress={onPressChange}
      style={[styles.btnStyle, { backgroundColor: bgColor }]}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export { BButton };

const styles = StyleSheet.create({
  btnStyle: {
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
