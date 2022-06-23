import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const COLORS = {
  primary: "lightblue",
  secondary: "#2E2933",
  tertiary: "#F5F5F5",
  white: "#FFFFFF",
  black: "#000000",
};

const BORDER_RADIUS = { borderRadius: 6 };

type StyleSize = 12 | 15 | 18 | 24 | 36 | 48 | 72;

export { COLORS, BORDER_RADIUS, StyleSize, wp, hp };
