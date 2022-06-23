import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "./src/components/Button";
import { Text } from "./src/components/Text";
import { COLORS, hp, wp } from "./src/utils/PRESETS";

export default function App() {
  const [display, setDisplay] = React.useState("0");
  const [operator, setOperator] = React.useState("");
  const [firstNumber, setFirstNumber] = React.useState("");
  const [result, setResult] = React.useState<string | number>("");

  type CalculatorMatrix = {
    value: string;
    onPress: () => void;
    color?: string;
    double?: boolean;
  }[][];

  const calculatorMatrix: CalculatorMatrix = [
    [
      {
        value: "AC",
        onPress: () => {
          setDisplay("0");
          setOperator("");
          setFirstNumber("");
          setResult("");
        },
        color: COLORS.primary,
      },
      {
        value: "+-",
        onPress: () => {
          if (display[0] === "-") {
            console.log("object");
            setDisplay(display.slice(1, display.length));
          } else {
            setDisplay("-" + display);
          }
        },
        color: COLORS.primary,
      },
      {
        value: "%",
        onPress: () => {
          setDisplay((parseFloat(display) / 100).toString());
        },
        color: COLORS.primary,
      },
      {
        value: "/",
        onPress: () => {
          setOperator("/");
          setFirstNumber(display);
          setDisplay("0");
        },
        color: COLORS.primary,
      },
    ],
    [
      {
        value: "7",
        onPress: () => {
          setDisplay(display === "0" ? "7" : display + "7");
        },
      },
      {
        value: "8",
        onPress: () => {
          setDisplay(display === "0" ? "8" : display + "8");
        },
      },
      {
        value: "9",
        onPress: () => {
          setDisplay(display === "0" ? "9" : display + "9");
        },
      },
      {
        value: "*",
        onPress: () => {
          setOperator("*");
          setFirstNumber(display);
          setDisplay("0");
        },
        color: COLORS.primary,
      },
    ],
    [
      {
        value: "4",
        onPress: () => {
          setDisplay(display === "0" ? "4" : display + "4");
        },
      },
      {
        value: "5",
        onPress: () => {
          setDisplay(display === "0" ? "5" : display + "5");
        },
      },
      {
        value: "6",
        onPress: () => {
          setDisplay(display === "0" ? "6" : display + "6");
        },
      },
      {
        value: "-",
        onPress: () => {
          setOperator("-");
          setFirstNumber(display);
          setDisplay("0");
        },
        color: COLORS.primary,
      },
    ],
    [
      {
        value: "1",
        onPress: () => {
          setDisplay(display === "0" ? "1" : display + "1");
        },
      },
      {
        value: "2",
        onPress: () => {
          setDisplay(display === "0" ? "2" : display + "2");
        },
      },
      {
        value: "3",
        onPress: () => {
          setDisplay(display === "0" ? "3" : display + "3");
        },
      },
      {
        value: "+",
        onPress: () => {
          setOperator("+");
          setFirstNumber(display);
          setDisplay("0");
        },
        color: COLORS.primary,
      },
    ],
    [
      {
        value: "0",
        onPress: () => {
          setDisplay(display === "0" ? "0" : display + "0");
        },
        double: true,
      },
      {
        value: ".",
        onPress: () => {
          setDisplay(display === "0" ? "0" : display + ".");
        },
        color: COLORS.primary,
      },
      {
        value: "=",
        onPress: () => {
          let _result = 0;
          const number = result !== "" ? result.toString() : firstNumber;

          if (operator === "+") {
            _result = parseFloat(number) + parseFloat(display);
          } else if (operator === "-") {
            _result = parseFloat(number) - parseFloat(display);
          } else if (operator === "*") {
            _result = parseFloat(number) * parseFloat(display);
          } else if (operator === "/") {
            _result = parseFloat(number) / parseFloat(display);
          }

          if (operator !== "") {
            setFirstNumber(`${number} ${operator} ${display}`);
            setResult(_result.toString().slice(0, 10));
            setDisplay(_result.toString().slice(0, 10));
          }
        },
        color: COLORS.primary,
      },
    ],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <ScrollView
          style={styles.displayContainer}
          contentContainerStyle={styles.display}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.display}>
            <Text size={24} style={styles.displayText} color={COLORS.white}>
              {firstNumber}
            </Text>
            <Text size={48} style={styles.displayText} color={COLORS.white}>
              {display}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonGroup}>
          {calculatorMatrix.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map(({ value, onPress, double, color }, buttonIndex) => (
                <Button
                  key={buttonIndex}
                  color={color}
                  double={double}
                  onPress={onPress}
                >
                  <Text size={18}>{value}</Text>
                </Button>
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    height: hp(100),
    backgroundColor: COLORS.secondary,
  },
  content: {
    alignSelf: "center",
  },
  displayContainer: {
    transform: [{ scaleX: -1 }],
    marginRight: 22,
  },
  display: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  displayText: {
    transform: [{ scaleX: -1 }],
  },
  buttonGroup: {
    width: wp(100),
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});
