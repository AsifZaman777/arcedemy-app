import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Feather'; // For back icon and eye toggle

const Signup = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View className="flex-1 bg-white p-4 md:p-6 lg:p-8 items-center justify-center">
      <TouchableOpacity className="absolute top-6 left-4 mt-10 ml-1" onPress={() => navigation.navigate('Signin')}>
        <Icon name="arrow-left" size={24} color="orange" />
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} className="mb-8 items-center">
        {image ? (
          <Image source={{ uri: image }} className="w-32 h-32 rounded-full" />
        ) : (
          <View className="w-32 h-32 rounded-full border border-gray-300 justify-center items-center">
            <Text className="text-gray-400">Select Avatar</Text>
          </View>
        )}
      </TouchableOpacity>

      <View className="w-full max-w-md">
        <TextInput
          placeholder="Email"
          className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Name"
          className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
        />
        <TextInput
          placeholder="Mobile"
          className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8 mb-4"
          keyboardType="phone-pad"
        />
        <View className="relative mb-4">
          <TextInput
            placeholder="Password"
            className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3"
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="relative mb-6">
          <TextInput
            placeholder="Confirm Password"
            className="w-full h-12 md:h-14 lg:h-16 border border-orange-500 rounded-lg px-4 md:px-6 lg:px-8"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-3"
          >
            <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-full bg-orange-400 rounded-3xl py-3 justify-center items-center shadow-lg">
          <Text className="text-white text-lg font-semibold">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
