import {Text, StyleSheet, TouchableOpacity} from "react-native";
import React from'react';

export default function HouseItem({ item }) {
    return (
        <TouchableOpacity >
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
        );
    };
    
    const styles = StyleSheet.create({
        item: {
            padding: 16,
            marginTop: 16,
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: 'dashed',
            borderRadius: 10,
        }
    });