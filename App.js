import * as React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from './src/components/Posts'
import FetchedPosts from './src/components/FetchedPosts'

props.name = "accName";

const LoginScreen = ({ navigation}) => {

    //props.name = "accName";

    return (
        <View style = {{paddingTop: 23}}>
                    <TextInput style = {{margin: 15, height: 40, borderWidth: 1}}
                       underlineColorAndroid = "transparent"
                       placeholder = "name"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                    />
                    <TextInput style = {{margin: 15, height: 40, borderWidth: 1}}
                       underlineColorAndroid = "transparent"
                       placeholder = "Password"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                    />
                    <TouchableOpacity style = {{ padding: 10, margin: 15, height: 40}}
                       onPress = {() => navigation.navigate('List')}>
                       <Text > Submit </Text>
                    </TouchableOpacity>
                    </View>
    )

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
            options={{headerTitle: 'Список', headerLeft: null, headerRight: () => (<Text>Зюзя</Text>)}}/>
        <Stack.Screen name="Element" component={ElementScreen}
            options={{headerTitle: 'График', headerRight: () => (<Text>Зюзя</Text>)}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

