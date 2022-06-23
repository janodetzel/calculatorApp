import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { BORDER_RADIUS, COLORS, wp } from "../utils/PRESETS";

type ButtonsProps = {
    children: React.ReactNode;
    color?: string;
    double?: boolean;
    onPress: () => void;
};

export const Button = ({ children, color, double, onPress }: ButtonsProps) => {
    // const buttonStyles = ;

    return (
        // <View style={[styles.container]}>
        <TouchableOpacity
            style={[
                styles.button,
                double ? styles.double : styles.single,
                { backgroundColor: color ? color : COLORS.tertiary },
            ]}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
        // </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        ...BORDER_RADIUS,
    },
    double: {
        width: wp(50) - 22,
        height: (wp(50) - 44) / 2,
    },
    single: {
        width: wp(25) - 22,
        height: wp(25) - 22,
    },
});
