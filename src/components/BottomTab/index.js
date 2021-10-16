
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function BottomTab() {
    return (
        <SafeAreaView>
            <View style={styles.tabBar}>
                <View style={styles.iconContainer}>
                    <Ionicons name='home' style={styles.icon} />
                    <Text>Home</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name='book' style={styles.icon} />
                    <Text>My Cources</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name='person' style={styles.icon} />
                    <Text>My Account</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        padding: 10
    },
    iconContainer: { alignItems: 'center' },
    icon: {
        fontSize: 30
    }
});
