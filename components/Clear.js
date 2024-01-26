import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Clear ({item}) {

    return (
    <TouchableOpacity>
        <Text>{item.item}</Text>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        boarderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10
    }
})