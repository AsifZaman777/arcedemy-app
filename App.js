import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens import
import SignIn from "./screens/Signin";
import SignUp from "./screens/Signup";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, //hides headers
        }}
      >
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
