import React from 'react';
import { Modal, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SuccessDrawer = ({ isVisible, iconName, iconColor, message }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <Animatable.View
        animation="slideInUp"
        duration={500}
        className="flex-1 justify-end"
      >
        <View className="bg-white w-full h-1/3 items-center justify-center border-t border-gray-200 rounded-t-3xl p-8">
          <Animatable.View animation="bounceIn" duration={1000}>
            <Icon name={iconName} size={80} color={iconColor} />
          </Animatable.View>
          <Animatable.Text animation="bounceIn" duration={1000} className="text-orange-400 text-2xl font-semibold mt-4">
            {message}
          </Animatable.Text>
        </View>
      </Animatable.View>
    </Modal>
  );
};

export default SuccessDrawer;
