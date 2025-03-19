export const colors = {
  primary: "#8E9DCC",
  secondary: "#6B7698",
  background: "#8E9DCC",
  text: "#FFF8E6",
  buttonBg: "#EFF0FF",
  buttonText: "#6B7698",
};

export const typography = {
  heading: {
    fontFamily: "Poppins",
    fontWeight: "700" as const,
    fontSize: 50,
    lineHeight: 42.5,
    letterSpacing: -3,
    color: colors.text,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "500" as const,
    letterSpacing: 1,
    color: colors.text,
  },
  button: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: colors.buttonText,
  },
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 40,
  xxlarge: 60,
};

export const layout = {
  maxWidth: 390,
  padding: 20,
};
