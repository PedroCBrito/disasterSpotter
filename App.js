import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./views/Login/Login.js";
import HomeUser from "./views/HomeUser.js";
import HomeAdmin from "./views/HomeAdmin.js";
import Register from "./views/Register.js";
import ForgotPassword from "./views/ForgotPassword.js";
import Info from "./views/Info.js";
import { onAuthStateChanged } from 'firebase/auth';
import { firebase_auth } from './components/config.jsx';




function App() {

  const Stack = createNativeStackNavigator();

  const [user, setUser] = useState();


  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      setUser(user);
    });

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen options={{ title: "", headerTransparent: true }} name="HomeUser" component={HomeUser} />
        ) : (
          <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name="Login" component={login} />
        )}
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="HomeAdmin" component={HomeAdmin} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="Register" component={Register} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;