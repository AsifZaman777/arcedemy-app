import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import SuccessDrawer from '../components/SuccessDrawer'; // Import the new SuccessDrawer component

const Signup = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isDrawerVisible, setDrawerVisible] = useState(false);

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

  const handleSave = () => {
    // Show the success drawer when save is clicked
    setDrawerVisible(true);

    // Hide the drawer after 3 seconds
    setTimeout(() => {
      setDrawerVisible(false);
    }, 3000);
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
        />
        <TextInput
          placeholder="Name"
          style={{ fontSize: 18 }} // Increase font size here
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
        />
        <TextInput
          placeholder="Mobile"
          style={{ fontSize: 18 }} // Increase font size here
          className="w-full h-14 md:h-16 lg:h-18 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="phone-pad"
        />
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
        <TouchableOpacity
          className="w-full bg-orange-400 rounded-3xl py-4 md:py-5 lg:py-6 justify-center items-center shadow-lg"
          onPress={handleSave}
        >
          <Text className="text-white text-lg md:text-xl lg:text-2xl font-semibold">Save</Text>
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
