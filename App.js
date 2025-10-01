import React, { useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function App() {
  const scrollRef = useRef();

  const scrollToSection = (y) => {
    scrollRef.current.scrollTo({ y, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Top Navigation Menu */}
      <View style={styles.topMenu}>
        {['Home', 'About', 'Projects', 'Contact'].map((section, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => scrollToSection(index * screenHeight)}
            style={styles.menuButton}
          >
            <Text style={styles.menuText}>{section}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Content */}
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        {/* Home Section */}
        <View style={[styles.section, { backgroundColor: '#6200EE' }]}>
          <Image
            source={{ uri: 'https://i.ibb.co/album-profile.png' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Bhoomika</Text>
          <Text style={styles.title}>React Native Developer</Text>
        </View>

        {/* About Section */}
        <View style={[styles.section, { backgroundColor: '#C8E6C9' }]}>
          <Text style={styles.heading}>About Me</Text>
          <Text style={styles.content}>
            I am a passionate React Native developer building modern, clean, and interactive mobile apps.
          </Text>
        </View>

        {/* Projects Section */}
        <View style={[styles.section, { backgroundColor: '#BBDEFB' }]}>
          <Text style={styles.heading}>Projects</Text>
          <View style={styles.card}>
            <Text style={styles.projectName}>Portfolio App</Text>
            <Text style={styles.projectDesc}>A modern portfolio app with navigation and attractive UI.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.projectName}>Chat App</Text>
            <Text style={styles.projectDesc}>Real-time chat application with Node.js backend.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.projectName}>E-commerce App</Text>
            <Text style={styles.projectDesc}>Mobile shopping app with cart and payment integration.</Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={[styles.section, { backgroundColor: '#D1C4E9' }]}>
          <Text style={styles.heading}>Contact Me</Text>
          <Text style={styles.content}>Email: example@mail.com</Text>
          <Text style={styles.content}>Phone: +91 1234567890</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#1f1f1f',
    paddingVertical: 12,
  paddingHorizontal: 10,
  },
  menuButton: {},
  menuText: { color: '#FFD700', fontWeight: 'bold', fontSize: 16 },
  menuButton: {
    marginLeft: 20, // space between menu items
  },
  

  section: {
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 15, borderWidth: 2, borderColor: '#FFD700' },
  name: { fontSize: 28, fontWeight: 'bold', color: 'white' },
  title: { fontSize: 18, color: '#FFD700', marginTop: 5 },

  heading: { fontSize: 24, fontWeight: 'bold', color: '#6200EE', marginBottom: 15 },
  content: { fontSize: 16, color: '#333', textAlign: 'center' },

  card: {
    width: '90%',
    backgroundColor: '#EDE7F6',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  projectName: { fontSize: 18, fontWeight: 'bold', color: '#6200EE', marginBottom: 5 },
  projectDesc: { fontSize: 14, color: '#333' },
});
