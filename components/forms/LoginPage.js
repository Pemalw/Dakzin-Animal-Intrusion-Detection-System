import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameIsInvalid, setUsernameIsInvalid] = useState("");

  const handleSignIn = () => {

    if (username!="a" || password!="b") {
      setUsernameIsInvalid('Username or Password is Invalid')
      setUsername("");
      setPassword("");
      return;
    }
    router.push('/auth/systemLogin');
    // You can implement your authentication logic and navigation here
  };

  const handleSignUp = () => {
    router.push('/auth/userSignUp');
  }

  const handleForgotPassword = () => {
    // Implement your forgot password logic here (e.g., send password reset email)
    alert('Forgot password functionality not yet implemented.');
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/images/logo.png")}/>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize='none'
        // isInvalid = {userameIsInvalid}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        // isInvalid = {passwordIsInvalid}
      />
      <Text style={styles.invalidText}>{usernameIsInvalid}</Text>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>      
      <TouchableOpacity >
        <Text style={styles.signUpButton} onPress={handleSignUp}>Create new account</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.loginButton} onPress={handleSignIn}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 15,
    paddingLeft: 8,
  },
  forgotButton: {
    height: 30,
    marginTop: 20,
    color: '#606161',
  },
  signUpButton: {
    height: 30,
    marginTop: 20,
    color: '#60cca3',
  },
  loginButton: {
    marginTop: 25,
    width: 120,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#60cca3',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  invalidText: {
    color: 'red',
    margin: 4,
  }
});

export default LoginPage;
