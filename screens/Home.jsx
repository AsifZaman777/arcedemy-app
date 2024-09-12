import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    curriculum: 'Cambridge',
    level: 'A2',
    avatar: null,
  });

  const navigation = useNavigation();

  // Style as per platform
  const marginTopClass = Platform.OS === 'android' ? 'mt-0' : 'mt-10';

  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      {/* Top Bar */}
      <View
        className={`flex-row items-center justify-between bg-white p-5 shadow-lg ${marginTopClass}`}
        style={{
          elevation: 10, // Adds shadow on Android
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 }, // For iOS shadow
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
      >
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => alert('Avatar clicked!')}>
            {user.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <View className="w-10 h-10 rounded-full bg-gray-400 justify-center items-center">
                <Icon name="user" size={20} color="#fff" />
              </View>
            )}
          </TouchableOpacity>

          <View className="ml-4">
            <Text className="text-base font-bold">{user.name}</Text>
            <Text className="text-xs text-gray-600">Curriculum: {user.curriculum}</Text>
            <Text className="text-xs text-gray-600">Level: {user.level}</Text>
          </View>
        </View>

        {/* Three Dots Menu */}
        <TouchableOpacity onPress={() => alert('Three dot menu clicked!')}>
          <Icon name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Rest of the Content */}
      <View className="p-5">
        {/* Add your other components or content here */}
      </View>
    </View>
  );
};

export default Home;
