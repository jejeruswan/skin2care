import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../constants/Theme";

interface QuestionHeaderProps {
  questionNumber: string;
  question: string;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  questionNumber,
  question,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>{questionNumber}</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  questionNumber: {
    ...typography.subheading,
    marginBottom: 12,
  },
  question: {
    ...typography.heading,
  },
});
