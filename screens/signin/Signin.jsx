import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//assets
import icon from "../../assets/icon.png";

//styles
import styles from "./signinStyle";
import SigninButton from "../../components/signinButton/SigninButton";

const Signin = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={icon}
        style={[styles.image, { opacity: fadeAnim }]}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <SigninButton />
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text className="mt-1 font-semibold" >New user? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
