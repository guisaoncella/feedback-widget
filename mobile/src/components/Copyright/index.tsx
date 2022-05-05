import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Copyright() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                guisaoncella ✨ Rocketseat NLW
            </Text>
        </View>
    );
}