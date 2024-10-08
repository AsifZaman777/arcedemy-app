import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import SuccessDrawer from '../components/SignupScreenComp/SuccessDrawer'; // Import the new SuccessDrawer component

const Signup = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri); // set image uri from selected image
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/; // Assuming a 10-digit mobile number

    if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!mobileRegex.test(mobile)) {
      errors.mobile = 'Invalid mobile number';
    }
    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSave = () => {
    if (validateForm()) {
      // Show the success drawer when save is clicked
      setDrawerVisible(true);

      // Hide the drawer after 2 seconds
      setTimeout(() => {
        setDrawerVisible(false);
        navigation.navigate('Signin');
      }, 2000);
    }
  };

  return (
    <View className="flex-1 bg-white p-4 md:p-6 lg:p-8 items-center justify-center">
      <TouchableOpacity className="absolute top-6 left-4 mt-10 ml-1" onPress={() => navigation.navigate('Signin')}>
        <Icon name="arrow-left" size={24} color="orange" />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} className="mb-8 items-center">
        {image ? (
          <Image source={{ uri: image }} className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full" />
        ) : (
          <View className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-gray-300 justify-center items-center">
            <Text className="text-gray-400 text-base md:text-lg lg:text-xl">Picture</Text>
          </View>
        )}
      </TouchableOpacity>

      <View className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        <TextInput
          placeholder="Email"
          style={{ fontSize: 18 }} // Increase font size here
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="email-address"
          value={email}
          onChangeText={(text)=>setEmail(text.toLowerCase())}
        />
        {errors.email && (
          <Animatable.View animation="fadeIn" duration={500} className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base md:text-lg lg:text-xl">{errors.email}</Text>
          </Animatable.View>
        )}
        
        <TextInput
          placeholder="Name"
          style={{ fontSize: 18 }} // Increase font size here
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          value={name}
          onChangeText={setName}
        />
        {errors.name && (
          <Animatable.View animation="fadeIn" duration={500} className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base md:text-lg lg:text-xl">{errors.name}</Text>
          </Animatable.View>
        )}
        
        <TextInput
          placeholder="Mobile"
          style={{ fontSize: 18 }} // Increase font size here
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={setMobile}
        />
        {errors.mobile && (
          <Animatable.View animation="fadeIn" duration={500} className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base md:text-lg lg:text-xl">{errors.mobile}</Text>
          </Animatable.View>
        )}
        
        <View className="relative mb-4">
          <TextInput
            placeholder="Password"
            style={{ fontSize: 18 }} // Increase font size here
            className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-5"
          >
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="orange" />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Animatable.View animation="fadeIn" duration={500} className="flex-row items-center mb-2">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base md:text-lg lg:text-xl">{errors.password}</Text>
          </Animatable.View>
        )}
        
        <View className="relative mb-6">
          <TextInput
            placeholder="Confirm Password"
            style={{ fontSize: 18 }} // Increase font size here
            className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-5"
          >
            <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="orange" />
          </TouchableOpacity>
        </View>
        {errors.confirmPassword && (
          <Animatable.View animation="fadeIn" duration={500} className="flex-row items-center -mt-3 mb-5">
            <Icon name="alert-circle" size={20} color="red" />
            <Text className="text-red-500 ml-2 text-base md:text-lg lg:text-xl">{errors.confirmPassword}</Text>
          </Animatable.View>
        )}
        
        <TouchableOpacity
          className="w-full bg-orange-400 rounded-3xl py-4 md:py-5 lg:py-6 justify-center items-center shadow-lg"
          onPress={handleSave}
        >
          <Text className="text-white text-lg md:text-xl lg:text-2xl font-semibold ">Save</Text>
        </TouchableOpacity>
      </View>

      {/* SuccessDrawer component */}
      <SuccessDrawer 
        isVisible={isDrawerVisible} 
        iconName="check-circle" 
        iconColor="orange" 
        message="Signup Successful!" 
      />
    </View>
  );
};

export default Signup;
