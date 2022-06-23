import React from "react";
import { StyleProp, Text as RNText, TextStyle } from "react-native";
import { COLORS, StyleSize } from "../utils/PRESETS";

interface TextProps {
    children: string | string[];
    textTransform?: "capitalize" | "lowercase" | "uppercase";
    size?: StyleSize;
    color?: string;
    style?: StyleProp<TextStyle>;
}

export const Text = ({
    children,
    textTransform,
    size = 12,
    color = COLORS.black,
    style,
}: TextProps) => {
    const textStyles = {
        fontSize: size,
        color,
        textTransform,
    };
    return <RNText style={[{ ...textStyles }, style]}>{children}</RNText>;
};

export const Headline = ({
    children,
    textTransform = "uppercase",
    size = 18,
    color = COLORS.black,
    style,
}: TextProps) => {
    const textStyles = {
        fontSize: size,
        color,
        textTransform,
    };
    return <RNText style={[{ ...textStyles }, style]}>{children}</RNText>;
};
