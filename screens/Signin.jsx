import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather"; // For icons if needed

// assets
import icon from "../assets/icon.png";


const Signin = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  // State management
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Handle animation on mount
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Input validation
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle sign-in action
  const handleSignin = () => {
    if (validateForm()) {
      // Call the sign-in API or navigate to the Home screen
      navigation.navigate("Home"); 
    }
  };

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
          style={{ fontSize: 18 }}
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        {errors.email && (
          <View className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base">{errors.email}</Text>
          </View>
        )}
        <TextInput
          placeholder="Password"
          style={{ fontSize: 18 }}
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && (
          <View className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base">{errors.password}</Text>
          </View>
        )}
        
        {/* Sign-in button */}
        <TouchableOpacity
          className="w-full bg-orange-400 rounded-3xl py-4 md:py-5 lg:py-6 justify-center items-center shadow-lg"
          onPress={handleSignin}
        >
          <Text className="text-white text-lg md:text-xl lg:text-2xl font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        className="mt-20 relative md:mt-6 lg:mt-8 flex items-center"
      >
        <Text className="text-neutral-800 font-bold text-base md:text-lg lg:text-xl lg:mt-20">
          Not registered yet?{" "}
          <Text className="text-orange-500 font-bold text-base md:text-lg lg:text-xl">
            SignUp
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
