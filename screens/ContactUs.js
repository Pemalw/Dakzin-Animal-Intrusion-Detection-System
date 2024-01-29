import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ContactUs = () => {
  const handleSocialMediaLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.socialMediaContainer}>
        <TouchableOpacity style={styles.smContainer} onPress={() => handleSocialMediaLink('https://www.facebook.com')}>
          <Icon name="facebook" size={30} color="#000" />
            <Text style={styles.socialMediaLink}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smContainer} onPress={() => handleSocialMediaLink('https://youtube.com')}>
          <Icon name="youtube" size={30} color="#000" />
            <Text style={styles.socialMediaLink}>Youtube</Text>
        </TouchableOpacity>

        <  TouchableOpacity style={styles.smContainer} onPress={() => handleSocialMediaLink('https://www.instagram.com')}>
          <Icon name="instagram" size={30} color="#000" />
            <Text style={styles.socialMediaLink}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smContainer} onPress={() => handleSocialMediaLink('https://www.linkedin.com')}>
          <Icon name="linkedin" size={30} color="#000" />
          <Text style={styles.socialMediaLink}>Linked In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.contactInfo}>Email: contact@example.com</Text>
      <Text style={styles.contactInfo}>Phone: +123 456 7890</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  socialMediaContainer: {
    marginBottom: 20,
  },
  smContainer:{
    flexDirection: 'row',
    alignItems:'center',
  },
  socialMediaLink: {
    fontSize: 16,
    marginLeft: 15,
    marginVertical: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ContactUs;
