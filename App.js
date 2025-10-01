// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// import HomeScreen from './screens/HomeScreen';
// import AboutScreen from './screens/AboutScreen';
// import ProjectsScreen from './screens/ProjectsScreen';
// import ProjectDetailsScreen from './screens/ProjectDetailsScreen';
// import ContactScreen from './screens/ContactScreen';

// const Stack = createNativeStackNavigator();
// // const Tab = createBottomTabNavigator();

// const Tab = createMaterialTopTabNavigator();


// // Stack for Projects Tab
// function ProjectsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="ProjectsMain" component={ProjectsScreen} options={{ title: 'Projects' }} />
//       <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} options={{ title: 'Project Details' }} />
//     </Stack.Navigator>
//   );
// }

// // Bottom Tabs
// function MainTabs() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: 'white',
//       tabBarInactiveTintColor: '#ddd',
//       tabBarStyle: { backgroundColor: '#6200EE' },
//       tabBarIndicatorStyle: { backgroundColor: 'yellow' },
//     }}
//   >
    
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="About" component={AboutScreen} />
//       <Tab.Screen name="Projects" component={ProjectsStack} options={{ headerShown: false }} />
//       <Tab.Screen name="Contact" component={ContactScreen} />
//     </Tab.Navigator>
//   );
// }

// // App Container
// export default function App() {
//   return (
//     <NavigationContainer>
//       <MainTabs />
//     </NavigationContainer>
//   );
// }
import React, { useRef } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function App() {
  const scrollRef = useRef();

  const scrollToSection = (yPosition) => {
    scrollRef.current.scrollTo({ y: yPosition, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Menu at bottom */}
      <View style={styles.menu}>
        <Button title="Home" onPress={() => scrollToSection(0)} />
        <Button title="About" onPress={() => scrollToSection(screenHeight)} />
        <Button title="Projects" onPress={() => scrollToSection(screenHeight * 2)} />
        <Button title="Contact" onPress={() => scrollToSection(screenHeight * 3)} />
      </View>

      {/* Scrollable Content */}
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <View style={[styles.section, { backgroundColor: '#FFCDD2' }]}>
          <Text style={styles.title}>Home Section</Text>
        </View>

        <View style={[styles.section, { backgroundColor: '#C8E6C9' }]}>
          <Text style={styles.title}>About Section</Text>
        </View>

        <View style={[styles.section, { backgroundColor: '#BBDEFB' }]}>
          <Text style={styles.title}>Projects Section</Text>
        </View>

        <View style={[styles.section, { backgroundColor: '#D1C4E9' }]}>
          <Text style={styles.title}>Contact Section</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#6200EE',
  },
  section: {
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000' },
});
