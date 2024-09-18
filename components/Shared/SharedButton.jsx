import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SharedButton = ({ text, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <View className="w-full lg:w-1/2 items-center mx-auto">
      <TouchableOpacity
        className="w-full h-12 bg-orange-400 rounded-3xl justify-center items-center mt-10 shadow-lg shadow-slate-300"
        //style to add shadow for android and ios 
        style={{
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 10,
        }}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Text className="text-lg font-semibold text-white">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SharedButton;
