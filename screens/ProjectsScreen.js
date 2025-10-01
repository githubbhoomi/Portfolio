import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProjectsScreen() {
  const projects = [
    { name: 'Portfolio App', desc: 'React Native portfolio with navigation & UI.' },
    { name: 'Chat App', desc: 'Realtime chat app using Node.js backend.' },
    { name: 'E-commerce App', desc: 'Mobile shopping app with payments.' },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {projects.map((p, index) => (
        <TouchableOpacity key={index} style={styles.card}>
          <Text style={styles.projectName}>{p.name}</Text>
          <Text style={styles.projectDesc}>{p.desc}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EDE7F6',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  projectName: { fontSize: 18, fontWeight: 'bold', color: '#6200EE', marginBottom: 5 },
  projectDesc: { fontSize: 14, color: '#333' },
});
