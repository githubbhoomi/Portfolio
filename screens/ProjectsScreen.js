import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProjectsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Button
        title="View Project Details"
        onPress={() => navigation.navigate('ProjectDetails', { projectName: 'My Awesome Project' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
