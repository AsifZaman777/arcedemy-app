import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';

// Get screen dimensions
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// Define variables for padding and text sizes based on screen size
const paddingVertical = isTablet ? 'pt-12' : 'pt-4';
const paddingHorizontal = isTablet ? 'p-24' : 'p-5';

const headerTextSize = isTablet ? 'text-4xl' : 'text-xl';
const subHeaderTextSize = isTablet ? 'text-3xl' : 'text-base';
const smallTextSize = isTablet ? 'text-2xl' : 'text-sm';

//analytics responive variables
const digitTextSize = isTablet ? 'text-8xl' : 'text-5xl';
const mtResponsive = isTablet ? 'mt-14' : 'mt-5';

const examParticipationRate = 85;
const elapsedExamDuration = 2;

const AnalyticsCard = () => {
  return (
    <View className={`${paddingHorizontal} ${paddingVertical}`}>
      <Card
        containerStyle={{
          borderRadius: 15,
          elevation: 10, // Android shadow
          // iOS shadow properties
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          paddingVertical: isTablet ? 30 : 20,
          paddingHorizontal: isTablet ? 40 : 20,
        }}
      >
        <Text className={`${headerTextSize} font-bold text-neutral-800`}>Analytics Report</Text>

        <View className={`flex-row items-center justify-between ${mtResponsive}`}>
          {/* Left Section */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text className={`${subHeaderTextSize} font-md text-orange-500 ${digitTextSize}`}>{examParticipationRate}%</Text>
            <Text className={`${smallTextSize} text-neutral-500`}>Exam participation</Text>
          </View>

          {/* Divider */}
          <View style={{ width: 1, height: isTablet ? 120 : 80, backgroundColor: 'lightgray' }} />

          {/* Right Section */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text className={`${subHeaderTextSize} font-md text-orange-500 ${digitTextSize}`}>{elapsedExamDuration} hr</Text>
            <Text className={`${smallTextSize} text-neutral-500`}>Exam durations</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default AnalyticsCard;
