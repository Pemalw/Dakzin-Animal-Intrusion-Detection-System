import React from "react";
import {View, Text, StyleSheet, Image}from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const Help = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Help Center</Text>
                <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. {"\n\n"}
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    );
};

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    title: {
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 20,
        padding:10,
        marginBottom: 10,
    },
    content: {
        textAlign:"justify",
        padding: 8,
    }
});