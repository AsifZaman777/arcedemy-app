import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// assets
import icon from "../assets/icon.png";

// components
import SigninButton from "../components/SigninButton";

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
    <View className="flex-1 bg-white justify-center px-4 py-6 md:px-12 md:py-8 lg:px-16 lg:py-12">
      <Animated.Image
        source={icon}
        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8 md:mb-10 lg:mb-12"
        style={{
          resizeMode: "contain",
          opacity: fadeAnim,
        }}
      />
      <View className="space-y-4 md:space-y-6 lg:space-y-8">
        <TextInput
          placeholder="Email"
          className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
          secureTextEntry
        />
        <SigninButton text="Sign In" navigateTo="Home" />
      </View>

      <TouchableOpacity
    
        onPress={() => navigation.navigate("Signup")}
        className="mt-20 relative md:mt-6 lg:mt-8 flex items-center"
      >
        <Text className="text-neutral-800 font-bold text-base md:text-lg lg:text-xl lg:mt-20">Not registered yet? <Text className="text-orange-500 font-bold text-base md:text-lg lg:text-xl">SignUp</Text> </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
