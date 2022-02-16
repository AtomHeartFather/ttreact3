import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

const ListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      <Button
        title="Element"
        onPress={() => navigation.navigate('Element')}
      />
    </View>
  );
}


const ElementScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Element Screen</Text>
      <Button
        title="Назад"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Выйти из аккаунта"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
            options={{headerTitle: 'Вход в личный кабинет'}}/>
        <Stack.Screen name="List" component={ListScreen}
            options={{headerTitle: 'Список', headerLeft: null}}/>
        <Stack.Screen name="Element" component={ElementScreen}
            options={{headerTitle: 'График'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;