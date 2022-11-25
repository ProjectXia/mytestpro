import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, modifiers } from "../utils/theme";

function TextButton({ title, onPressChange }) {
  return (
    <TouchableOpacity onPress={onPressChange} style={styles.btnStyle}>
      <Text style={styles.btnTitle}>{title}</Text>
      <Ionicons
        name="arrow-forward"
        size={24}
        color={colors.primary}
        style={styles.fIcon}
      />
    </TouchableOpacity>
  );
}

export { TextButton };

const styles = StyleSheet.create({
  btnStyle: {
    paddingHorizontal: modifiers.containerPadding,
    flexDirection: "row",
    alignItems: "center",
  },
  btnTitle: {
    fontWeight: "medium",
  },
  fIcon: {
    marginLeft: 10,
  },
});
