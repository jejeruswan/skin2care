import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "../../src/components/QuestionHeader";
import { OptionButton } from "../../src/components/OptionButton";
import { colors, typography, spacing, layout } from "../../src/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
type RouteProps = RouteProp<RootStackParamList, 'Gender'>;

export const GenderScreen= () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const name = route.params?.name || "";
  const genderOptions = ["Man", "Woman", "Nonbinary", "Other"];
  const handleSelect = (gender: string) => {
    // Navigate to next screen with gender parameter
    navigation.navigate('SkinType', { name, gender });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HELLO, {name.toUpperCase()}!</Text>
      <QuestionHeader
        questionNumber="QUESTION 2"
        question="What is your gender?"
      />
      <View style={styles.optionsContainer}>
        {genderOptions.map((option) => (
          <OptionButton
            key={option}
            label={option}
            onPress={() => handleSelect(option)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  greeting: {
    fontSize: 20,
    color: colors.text,
    fontWeight: "500",
    marginBottom: spacing.xlarge,
  },
  optionsContainer: {
    gap: 9,
  },
});
