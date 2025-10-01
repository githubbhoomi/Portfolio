import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#6200EE', '#3700B3']} style={styles.header}>
        <Image
          source={{ uri: 'https://i.ibb.co/album-profile.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bhoomika</Text>
        <Text style={styles.title}>React Native Developer</Text>
      </LinearGradient>
      <View style={styles.body}>
        <Text style={styles.intro}>
          Welcome to my portfolio! I build modern, scalable mobile apps with React Native.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: '#FFD700' },
  name: { fontSize: 28, fontWeight: 'bold', color: 'white', marginTop: 10 },
  title: { fontSize: 18, color: '#FFD700', marginBottom: 20 },
  body: { flex: 1, padding: 20 },
  intro: { fontSize: 16, lineHeight: 24, color: '#333', textAlign: 'center' },
});
