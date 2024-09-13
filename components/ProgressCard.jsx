import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// Get screen dimensions
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// Define variables for padding and text sizes based on screen size
const paddingVertical = isTablet ? 'pt-8' : 'pt-4';
const paddingHorizontal = isTablet ? 'p-20' : 'p-5';

const headerTextSize = isTablet ? 'text-3xl' : 'text-lg';
const subHeaderTextSize = isTablet ? 'text-2xl' : 'text-base';
const smallTextSize = isTablet ? 'text-lg' : 'text-sm';

// Define daily progress object with subjects, percentile, and colors
const dailyProgress = [
  { subject: 'Physics', percentile: 90, color: 'red' },
  { subject: 'Chemistry', percentile: 88, color: 'yellow' },
  { subject: 'Mathematics', percentile: 95, color: 'green' },
];

const ProgressCard = () => {
  const navigation = useNavigation();

  return (
    <View className={`${paddingHorizontal} ${paddingVertical}`}>
      <Card
        containerStyle={{
          borderRadius: 15,
          elevation: 10, // Android shadow
          shadowColor: 'gray', // iOS shadow color
          shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
          shadowOpacity: 0.1, // iOS shadow opacity
          shadowRadius: 10, // iOS shadow radius
        }}
      >
        <View className="flex-row items-center justify-between">
          <Text className={`${headerTextSize} font-bold text-neutral-800`}>Daily Progress</Text>
        </View>

        {dailyProgress.map((item, index) => (
          <View className="flex-row items-center mt-4" key={index}>
            <View className="flex-1">
              <Text className={`${subHeaderTextSize} font-semibold text-neutral-700`}>
                {item.subject}
              </Text>
              <Text className={`${smallTextSize} text-neutral-500`}>
                {item.percentile}%
              </Text>
            </View>

            {/* Circular Progress Bar */}
            <AnimatedCircularProgress
              size={70}
              width={5}
              fill={item.percentile} // Use the percentile value as the fill percentage
              tintColor={item.color} // Color based on subject
              backgroundColor="#e0e0e0"
            >
              {(fill) => (
                <Text style={{ fontSize: isTablet ? 18 : 14 }}>
                  {Math.round(fill)}%
                </Text>
              )}
            </AnimatedCircularProgress>
          </View>
        ))}
      </Card>
    </View>
  );
};

export default ProgressCard;
