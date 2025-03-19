import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "../../src/components/QuestionHeader";
import { OptionButton } from "../../src/components/OptionButton";
import { colors, typography, spacing, layout } from "../../src/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinType'>;
type RouteProps = RouteProp<RootStackParamList, 'SkinType'>;

export const SkinTypeScreen= () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedSkinType, setSelectedSkinType] = useState<string | null>(null);

  const { name, gender } = route.params;
  const skinTypeOptions = ["Dry", "Dry to Combination", "Combination", "Combination to Oily", "Oily"];
  
  const handleSelect = (skinType: string) => {
    setSelectedSkinType(skinType);
    // Navigate to results screen with all parameters
    navigation.navigate('Result', { name, gender, skinType });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 3"
        question="What is your skin type?"
      />
      <View style={styles.optionsContainer}>
        {skinTypeOptions.map((option) => (
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
  optionsContainer: {
    gap: 9,
  },
});
