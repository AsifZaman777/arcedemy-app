import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

// Get screen dimensions
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// Define variables for padding and text sizes based on screen size
const paddingVertical = isTablet ? 'pt-8' : 'pt-4';
const paddingHorizontal = 'p-5';

const headerTextSize = isTablet ? 'text-2xl' : 'text-lg';
const subHeaderTextSize = isTablet ? 'text-lg' : 'text-base';
const smallTextSize = isTablet ? 'text-base' : 'text-sm';

const ProgressCard = () => {
  const navigation = useNavigation();

  return (
    <View className={`${paddingHorizontal} ${paddingVertical}`}>
      <Card>
        <View className="flex-row items-center justify-between">
          <Text className={`${headerTextSize} font-bold text-neutral-800`}>Today's Schedule</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Text className="text-orange-500 font-semibold">View All</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center mt-4">
          <View className="flex-1">
            <Text className={`${subHeaderTextSize} font-semibold text-neutral-700`}>Mathematics</Text>
            <Text className={`${smallTextSize} text-neutral-500`}>9:00 AM - 10:00 AM</Text>
          </View>
          <TouchableOpacity onPress={() => alert('Join class clicked!')}>
            <Text className="text-orange-500 font-semibold">Join Class</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default ProgressCard;
