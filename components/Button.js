import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(221, 160, 191, 0.9)",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 5,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});