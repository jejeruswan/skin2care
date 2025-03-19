// Put this in a separate file: src/types/navigation.ts
export type RootStackParamList = {
    Welcome: undefined;
    NameInput: undefined;
    Gender: { name: string };
    SkinType: { name: string; gender: string };
    Result: { name: string; gender: string; skinType: string };
  };