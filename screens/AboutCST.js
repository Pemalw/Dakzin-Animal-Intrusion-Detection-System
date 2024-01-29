import React from "react";
import {View, Text, StyleSheet, Image}from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const AboutCST = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>College of Science and Technology</Text>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/images/cstlogo.png')} style={styles.logo} />
                </View>
                <Text style={styles.content}>The College of Science and Technology (CST) is the first institute in the country to 
                    offer undergraduate degree programmes in engineering under the Royal University of Bhutan.  
                    The college aspires to be a centre of excellence in the field of science and technology-enriched 
                    with GNH values by offering quality programmes that are relevant to the need of the job market 
                    both within and outside the country.{"\n\n"}
                    College of Science and Technology (CST), is responsible to oversee the tertiary education 
                    system in the Kingdom of Bhutan in the field of science and technology. The College presently 
                    offers Bachelor degree programmes in Civil Engineering, Electrical Engineering, Electronics 
                    and Communications Engineering, Information Technology, Architecture, Instrumentation and 
                    Control Engineering, and Engineering Geology. The College also offers a Master degree programme 
                    in Renewable Energy and Construction Management. The curriculum got evolved to address the quality, 
                    internationalization and with the urgent need felt by the country. Besides the regular programmes, 
                    the College, having been duly identified and recognized by the Royal Civil Service Commission, 
                    conducts short-term training, workshops and courses for in-service civil servants, particularly 
                    for technical professionals. Our campus offers high-quality learning, teaching and research spaces 
                    to better meet the needs of students, academics and researchers.{"\n\n"}
                    The College has a team of well qualified and committed faculty and relatively good laboratory 
                    resources. The Library is being stocked with more books, journals and other learning materials. 
                    Internet connectivity is through a leased line of connectivity available to all the staffs and 
                    student 24/7.</Text>
            </View>
        </ScrollView>
    );
};

export default AboutCST;

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