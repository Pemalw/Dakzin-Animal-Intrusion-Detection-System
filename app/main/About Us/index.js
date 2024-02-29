import React from "react";
import {View, Text, StyleSheet, Image, ScrollView}from 'react-native';

const AboutUs = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Text style={styles.title}>About Us</Text> */}
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/images/amclogo.png')} style={styles.logo} />
                    <Text style={styles.content}>The Agriculture Machinery and Technology, founded in 1983, has been a key player in realizing national food 
                    self-sufficiency. With a vision that places Bhutanese farmers at the core of all agricultural 
                    development activities, AMTC has strategically worked towards enhancing the effectiveness and 
                    efficiency of farming practices through the mechanization of agriculture.{"\n\n"}
                    </Text>
                </View>
                <View style={styles.logoContainer}>
                    <Text style={styles.content}>
                    The College of Science and Technology, established as the first institute in the country to offer 
                    undergraduate degree programs in engineering under the Royal University of Bhutan, has consistently 
                    strived to be a center of excellence in science and technology. Enriched with Gross National Happiness 
                    (GNH) values, CST is committed to providing quality programs that align with the evolving needs 
                    of the job market.{"\n\n"}
                    </Text>
                    <Image source={require('../../../assets/images/cstlogo.png')} style={styles.logo} />

                </View>
                <Text style={styles.title}>Fostering Innovation: CST and AMTC Collaborate on Cutting-Edge Projects</Text>
                <Text style={styles.content}>
                    The College of Science and Technology (CST) and the Agriculture Machinery and Training Center 
                    (AMTC) have forged a dynamic collaboration aimed at pushing the boundaries of technological 
                    innovation in Bhutan. These two esteemed institutions, each with its unique vision and mission, 
                    have come together to work on groundbreaking projects that address critical challenges in agriculture 
                    and technology.{"\n\n"}
                    The collaboration between CST and AMTC has resulted in the initiation of innovative projects that 
                    hold great promise for the agricultural sector. One such project is the development of an Animal 
                    Intrusion Detection System, a cutting-edge technology designed to address the challenges posed by 
                    wildlife intrusion into farmlands. This collaborative effort leverages CST's expertise in engineering 
                    and technology to create a solution that not only safeguards crops but also ensures harmonious 
                    coexistence between agriculture and the environment.
                    </Text>
            </View>
        </ScrollView>
    );
};

export default AboutUs;

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
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 15,
        marginHorizontal: 50,
    },
    logo: {
        width: 80,
        height: 80,
        margin: 12,
    },
    content: {
        textAlign:"justify",
        padding: 5,
    }
});