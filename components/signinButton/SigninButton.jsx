import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SigninButton = ({ text, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        className="w-full h-12 bg-orange-400 rounded-3xl justify-center items-center mt-10 shadow-lg shadow-slate-300"
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Text className="text-lg font-md font-semibold text-white">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SigninButton;
