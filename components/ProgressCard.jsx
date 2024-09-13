import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// Get screen dimensions
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// Define variables for padding and text sizes based on screen size
const paddingVertical = isTablet ? 'pt-12' : 'pt-4';
const paddingHorizontal = isTablet ? 'p-16' : 'p-5';

const headerTextSize = isTablet ? 'text-4xl' : 'text-xl';
const subHeaderTextSize = isTablet ? 'text-3xl' : 'text-base';
const smallTextSize = isTablet ? 'text-xl' : 'text-sm';
const mbResponsive = isTablet ? 'mb-5' : 'mb-3';

//daily progress objects
const dailyProgress = [
  { subject: 'Physics', percentile: 90, color: 'red' },
  { subject: 'Chemistry', percentile: 88, color: 'lime' },
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
          //ios props
          shadowColor: 'gray', 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.1,
          shadowRadius: 10, 
        }}
      >
        <View className="flex-row items-center justify-between">
          <Text className={`${headerTextSize} font-bold text-neutral-800 ${mbResponsive}`}>Daily Progress</Text>
        </View>

        <View className="flex-row items-center justify-between mt-4">
          {/* Left section: List of subjects */}
          <View className="flex-1">
            {dailyProgress.map((item, index) => (
              <View className={`flex-row items-center mb-4 ${mbResponsive}`} key={index}>
                {/* Color square */}
                <View
                className={isTablet ? '-mt-6' : '-mt-4'}
                  style={{
                    width: isTablet ? 16 : 10,
                    height: isTablet ? 16 : 10,
                    backgroundColor: item.color,
                    marginRight: 10,
                    borderRadius: isTablet ? 8 : 5,
                  }}
                />
                <View>
                  <Text className={`${subHeaderTextSize} font-semibold text-neutral-700`}>
                    {item.subject}
                  </Text>
                  <Text className={`${smallTextSize} text-neutral-500`}>
                    {item.percentile}%
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Right section: Single progress circle */}
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ position: 'relative', width: isTablet? 300:150, height: isTablet? 280:180 }}>
              <AnimatedCircularProgress
                size={isTablet? 230 : 130}
                width={isTablet? 10 : 5}
                fill={dailyProgress[0].percentile} // Physics
                tintColor={dailyProgress[0].color}
                backgroundColor="#e0e0e0"
              />

              {/* Chemistry progress */}
              <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <AnimatedCircularProgress
                  size={isTablet? 210 : 110}
                  width={isTablet? 10 : 5}
                  fill={dailyProgress[1].percentile} // Chemistry
                  tintColor={dailyProgress[1].color}
                  backgroundColor="#e0e0e0"
                />
              </View>

              {/* Mathematics progress */}
              <View style={{ position: 'absolute', top: 20, left: 20 }}>
                <AnimatedCircularProgress
                  size={isTablet? 190 : 90}
                  width={isTablet? 10 : 5}
                  fill={dailyProgress[2].percentile} // Mathematics
                  tintColor={dailyProgress[2].color}
                  backgroundColor="#e0e0e0"
                >
                  {(fill) => (
                    <Text className="text-neutral-500" style={{ fontSize: isTablet ? 18 : 14, textAlign: 'center', fontWeight: 'normal' }}>
                      Avg = {Math.round((dailyProgress[0].percentile + dailyProgress[1].percentile + dailyProgress[2].percentile) / 3)}%
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ProgressCard;
