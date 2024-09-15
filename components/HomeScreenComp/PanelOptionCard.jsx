import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Get screen dimensions
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// Define variables for padding and text sizes based on screen size
const paddingVertical = isTablet ? 'pt-12' : 'pt-4';
const paddingHorizontal = isTablet ? 'p-24' : 'p-5';

const headerTextSize = isTablet ? 'text-4xl' : 'text-xl';
const cardTextSize = isTablet ? 'text-3xl' : 'text-base';


// Panel card options array with navigation route, icons, and colors
const panelOptions = [
  { title: 'MCQ Solver', icon: 'book', route: 'MCQSolver', color: '#f28b82' },     // Red
  { title: 'Create Paper', icon: 'pencil', route: 'CreatePaper', color: '#fbbc04' }, // Yellow
  { title: 'Practice Quiz', icon: 'question-circle', route: 'PracticeQuiz', color: '#34a853' }, // Green
  { title: 'Competitive Quiz', icon: 'trophy', route: 'CompetitiveQuiz', color: '#4285f4' },    // Blue
];

const PanelOptionCard = () => {
  const navigation = useNavigation();

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
        <Text className={`${headerTextSize} font-bold text-neutral-800 mb-6`}>Panel Options</Text>

        {/* Grid container */}
        <View className="flex-wrap flex-row justify-between">
          {panelOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(option.route)}
              style={{
                width: '45%',    // Ensures 2 cards per row with some space between them
                padding: isTablet ? 20 : 10,
                marginHorizontal: '2.5%',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: option.color, // Assign dynamic color from the panelOptions array
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 5,
                elevation: 5, // Android shadow
                marginBottom: 15,  // Vertical space between rows
              }}
            >
              {/* Icon */}
              <Icon name={option.icon} size={isTablet ? 60 : 30} color="white" />

              {/* Title */}
              <Text className={`${cardTextSize} font-medium text-center text-white mt-4`}>
                {option.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Card>
    </View>
  );
};

export default PanelOptionCard;
