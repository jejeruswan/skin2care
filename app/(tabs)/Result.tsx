import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { OptionButton } from "../../src/components/OptionButton";
import { colors, typography, spacing, layout } from "../../src/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../src/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Result'>;
type RouteProps = RouteProp<RootStackParamList, 'Result'>;

export const ResultScreen= () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const { name, gender, skinType } = route.params;
  const onComplete = () => {
    navigation.navigate('Welcome');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {name}, welcome to your clear skin era. Tap to view the routine we've
        prepared for you.
      </Text>
      <OptionButton
        label="Let me see!"
        onPress={onComplete}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  message: {
    fontSize: 40,
    color: colors.text,
    fontWeight: "700",
    lineHeight: 41.6,
    letterSpacing: -0.3,
    marginBottom: 47,
  },
  button: {
    width: 259,
    height: 71,
  },
});
