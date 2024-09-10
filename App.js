import SignIn from "./screens/signin/Signin.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, //hides headers
        }}
      >
        <Stack.Screen name="UserSignin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
