import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./views/Login/Login.js";
import HomeUser from "./views/HomeUser.js";
import HomeAdmin from "./views/HomeAdmin.js";
import Register from "./views/Register.js";
import ForgotPassword from "./views/ForgotPassword.js";
import Review from './views/Review.js';
import Send from './views/Send.js';





function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerTransparent: true, headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="HomeAdmin" component={HomeAdmin} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="HomeUser" component={HomeUser} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="Register" component={Register} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="Send" component={Send} />
        <Stack.Screen options={{ title: "", headerTransparent: true }} name="Review" component={Review} />
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