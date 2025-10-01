import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AboutScreen() {
  const skills = [
    { name: 'React Native', icon: 'react' },
    { name: 'JavaScript', icon: 'language-javascript' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Git', icon: 'git' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>
      <Text style={styles.content}>
        Passionate mobile developer building modern apps with clean UI and efficient code.
      </Text>

      <Text style={[styles.heading, { marginTop: 20 }]}>Skills</Text>
      <View style={styles.skills}>
        {skills.map((skill, i) => (
          <View key={i} style={styles.skillCard}>
            <Icon name={skill.icon} size={30} color="#6200EE" />
            <Text style={styles.skillName}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#6200EE', marginBottom: 10 },
  content: { fontSize: 16, color: '#333' },
  skills: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  skillCard: {
    width: '45%',
    backgroundColor: '#EDE7F6',
    margin: 5,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  skillName: { marginTop: 8, fontWeight: 'bold', color: '#6200EE' },
});
