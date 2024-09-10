import React from 'react';
import { Modal, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SuccessDrawer = ({ isVisible, iconName, iconColor, message }) => {
  // Get the device's screen dimensions
  const { width } = Dimensions.get('window');

  // Determine sizes based on screen width
  const isIpad = width > 768;
  const iconSize = isIpad ? 120 : 80;
  const textSize = isIpad ? 'text-5xl mt-10' : 'text-2xl';

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <Animatable.View
        animation="slideInUp"
        duration={500}
        className="flex-1 justify-end"
      >
        <View className={`bg-neutral-700 h-1/3 items-center justify-center  rounded-t-3xl p-8`}>
          <Animatable.View animation="bounceIn" duration={1000}>
            <Icon name={iconName} size={iconSize} color={iconColor} />
          </Animatable.View>
          <Animatable.Text
            animation="bounceIn"
            duration={1000}
            className={`text-orange-400 font-semibold mt-4 ${textSize}`}
          >
            {message}
          </Animatable.Text>
        </View>
      </Animatable.View>
    </Modal>
  );
};

export default SuccessDrawer;
