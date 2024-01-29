import React from "react";
import {View, Text, StyleSheet, Image}from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const AboutAMTC = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Agriculture Machinery and Technology Center</Text>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/amclogo.png')} style={styles.logo} />
                </View>
                <Text style={styles.content}>AMC was established in 1983 with the vision to realize national food 
                    self sufficiency. This vision placed the Bhutanese farmers at the core of all agriculture 
                    development activities.{"\n\n"}
                    AMC aligned itself strategically to contribute towards the achievement 
                    of the vision through enhanced effectiveness and efficiency in Bhutanese farming practices. It 
                    embarked on the program to mechanize Bhutanese agriculture through use of appropriate farm 
                    machinery equipments and tools.
                    </Text>
            </View>
        </ScrollView>
    );
};

export default AboutAMTC;

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
    logoContainer: {
        alignItems: "center",
        marginBottom: 15,
    },
    logo: {
        width: 120,
        height: 120,
    },
    content: {
        textAlign:"justify",
        padding: 8,
    }
});