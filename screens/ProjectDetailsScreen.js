import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectDetailsScreen({ route }) {
  const { projectName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projectName}</Text>
      <Text>Here are the details of the project...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
