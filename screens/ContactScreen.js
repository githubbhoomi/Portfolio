import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ContactScreen() {
  const handleSubmit = () => {
    Alert.alert('Message Sent', 'Thank you for contacting me!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>
      <TextInput style={styles.input} placeholder="Your Name" />
      <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" />
      <TextInput style={[styles.input, { height: 100 }]} placeholder="Your Message" multiline />

      <TouchableOpacity onPress={handleSubmit}>
        <LinearGradient colors={['#6200EE', '#3700B3']} style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#6200EE', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
