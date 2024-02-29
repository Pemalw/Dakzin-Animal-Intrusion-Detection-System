import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Help = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Help Center</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions (FAQs)</Text>

          <View style={styles.qa}>
            <Text style={styles.question}>Q: What is Animal Intrusion Detection?</Text>
            <Text style={styles.answer}>A: Animal Intrusion Detection is an innovative app designed to monitor and detect unauthorized animal access in your designated areas. It uses advanced sensors and technology to alert you when animals are detected.</Text>
          </View>

          <View style={styles.qa}>
            <Text style={styles.question}>Q: How does it work?</Text>
            <Text style={styles.answer}>A: The app utilizes motion sensors and image recognition to identify and notify you about potential animal intrusions. Simply set up the monitoring zones, and the app will keep a watchful eye on your specified areas.</Text>
          </View>

          <View style={styles.qa}>
            <Text style={styles.question}>Q: Can I customize monitoring zones?</Text>
            <Text style={styles.answer}>A: Yes, you can easily customize the monitoring zones based on your specific needs. </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Getting Started</Text>

          <Text style={styles.step}>1. Download and install the Animal Intrusion Detection app from the App Store or Google Play.</Text>
          <Text style={styles.step}>2. Open the app and follow the on-screen instructions to set up your account.</Text>
          <Text style={styles.step}>3. Configure monitoring zones according to your preferences.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alerts</Text>

          <Text style={styles.bullet}>- Receive real-time alerts on your device when animal intrusions are detected.</Text>
          <Text style={styles.bullet}>- Customize notification preferences in the app settings.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Troubleshooting</Text>

          <View style={styles.qa}>
            <Text style={styles.question}>Q: I'm not receiving alerts. What should I do?</Text>
            <Text style={styles.answer}>A: Make sure that your device has proper internet connectivity. Check app settings to ensure notifications are enabled. If the issue persists, contact our support team.</Text>
          </View>

          <View style={styles.qa}>
            <Text style={styles.question}>Q: How can I improve detection accuracy?</Text>
            <Text style={styles.answer}>A: Adjust sensitivity settings in the app to fine-tune detection. Ensure that monitoring zones are correctly configured and free from obstructions.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>

          <Text style={styles.contactText}>If you have further questions or need assistance, please reach out to our support team at www.amc.gov.bt. We're here to help!</Text>
        </View>

        <Text style={styles.thankYou}>Thank you for choosing Animal Intrusion Detection.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    color: '#333333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  qa: {
    marginBottom: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007aff',
  },
  answer: {
    fontSize: 14,
    color: '#333333',
  },
  step: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333333',
  },
  bullet: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333333',
  },
  contactText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333333',
  },
  thankYou: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Help;
