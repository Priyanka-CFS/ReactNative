import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [storedUsername, setStoredUsername] = useState('');
  const [storedPassword, setStoredPassword] = useState('');

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = () => {
    if (inputUsername && inputPassword) {
      setStoredUsername(inputUsername);
      setStoredPassword(inputPassword);
      setInputUsername('');
      setInputPassword('');
      setIsRegistered(true);
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  const handleLogin = () => {
    if (inputUsername === storedUsername && inputPassword === storedPassword) {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleBack = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <View style={styles.loggedInContainer}>
        <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistered ? 'Login' : 'Register'}</Text>
      <TextInput
        placeholder="Username"
        value={inputUsername}
        onChangeText={setInputUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={inputPassword}
        onChangeText={setInputPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={isRegistered ? handleLogin : handleRegister}
      >
        <Text style={styles.buttonText}>{isRegistered ? 'Login' : 'Register'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#rgba', // Background color for the login/register screen
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#rrggbb', // Background color for the home screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3436',
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderColor: '#red',
  },
  button: {
    backgroundColor: 'green', // Button color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'balack',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default App;
