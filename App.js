import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

    const [current, setCurrent] = useState('Home');

    const HomeScreen = (
        <View style={styles.container}>
            <Text>Вход</Text>
            <Text>Произвольный текст</Text>
            <Button
                title="Start"
                onPress={() => setCurrent(DashboardScreen)}
            ></Button>
        </View>
    );

    const DashboardScreen = (
        <View style={styles.container}>
            <Text>Список</Text>
            <Text>Список</Text>
            <Button
                title="Back to login screen"
                onPress={() => setCurrent(HomeScreen)}
            ></Button>
        </View>
    );

    return current === 'Home' ? HomeScreen : current;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
