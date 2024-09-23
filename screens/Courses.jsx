import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

// Sample course data
const courses = [
  {
    id: 1,
    title: 'Physics',
    description: 'Physics combine lesson bundles',
    details: 'All the lessons and resources are made by experienced subject matter specialists.',
    image: 'https://plus.unsplash.com/premium_photo-1664302244254-0b614b519f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 2,
    title: 'Chemistry',
    description: 'Chemistry combine lesson bundles',
    details: 'All the lessons and resources are made by experienced subject matter specialists.',
    image: 'https://plus.unsplash.com/premium_photo-1661430659143-ffbb5ce2b6a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Mathematics',
    description: 'Mathematics combine lesson bundles',
    details: 'All the lessons and resources are made by experienced subject matter specialists.',
    image: 'https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF0aHxlbnwwfHwwfHx8MA%3D%3D',
  },

];

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const smallTextSize = isTablet ? 'text-xl' : 'text-sm';
const headTextSize = isTablet ? 'text-4xl' : 'text-lg';
const paddingSize = isTablet ? 'p-10' : 'p-4';
const imageHeight = isTablet ? 350 : 240;

const Courses = () => {

  return (
    <ScrollView className={`bg-slate-200 ${paddingSize}`}>
      {courses.map((course) => (
        <View
          key={course.id}
          className={`bg-white rounded-lg   ${isTablet? 'mb-20 p-7':'mb-10 p-4'}`}
          style={{
            elevation: 5, // For Android shadow
            shadowColor: 'gray', // For iOS shadow
            shadowOffset: { width: 0, height: 2 }, // Shadow offset
            shadowOpacity: 0.1, // Shadow opacity
            shadowRadius: 20, // Shadow blur radius
            marginHorizontal: isTablet ? 10 : 0,
          }}
        >
          <Image
            source={{ uri: course.image }}
            style={{ height: imageHeight }}
            className="w-full rounded-lg"
            resizeMode="cover"
          />
          <View className="mt-4">
            <Text className={`text-orange-500 ${headTextSize} font-bold`}>{course.title}</Text>
            <Text className={`text-gray-500 mt-2 ${smallTextSize}`}>{course.description}</Text>
            <Text className={`text-gray-500 mt-2 ${smallTextSize}`}>{course.details}</Text>
            <TouchableOpacity className={`bg-orange-400 rounded-xl mt-4 px-4 py-2 self-start`}>
              <Text className={`text-white text-center font-bold  ${isTablet? 'text-2xl':'text-sm'}`}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>  
      ))}
       <View style={{ marginBottom: 100 }}>
       </View>
    </ScrollView>
  );
};

export default Courses;
