import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";
import { styles } from "./styles";

interface Props{
    feedbackType: FeedbackType;
}

export function Form({feedbackType}: Props) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image source={feedbackTypeInfo.image} style={styles.image}/>
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>
        </View>
    );
}