import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../constants/Theme";

interface OptionButtonProps {
  label: string;
  onPress: () => void;
  style?: object;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 46,
    backgroundColor: colors.buttonBg,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: colors.buttonText,
    fontWeight: "700",
  },
});
