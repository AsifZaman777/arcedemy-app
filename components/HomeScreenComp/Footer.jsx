import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from '@rneui/themed'; // Import Card component
import * as Animatable from 'react-native-animatable'; // Import Animatable

// Get device width and check if it's a tablet
const { width } = Dimensions.get('window');
const isTablet = width >= 768; 

// Set font sizes based on the device type (tablet or phone)
const headerTextSize = isTablet ? 'text-4xl' : 'text-xl';
const subHeaderTextSize = isTablet ? 'text-3xl' : 'text-base';
const smallTextSize = isTablet ? 'text-xl' : 'text-md';

const Footer = () => {
  // Handle phone call
  const handleCall = () => {
    Linking.openURL('tel:+1234567890'); // Hotline number
  };

  return (
    <Card
      containerStyle={{
        borderRadius: 10,
        elevation: 1, // Android shadow
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 }, // iOS shadow
        shadowOpacity: 0,
        shadowRadius: 10,
        padding: 20, 
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: isTablet ? 20 : 10,
          paddingHorizontal: isTablet ? 40 : 20,
          borderBottomWidth: 0,
          borderColor: '#ddd',
        }}
      >
        {/* Hotline Button */}
        <TouchableOpacity
          onPress={handleCall}
          style={{
            paddingVertical: isTablet ? 20 : 10,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: isTablet ? 40 : 20,
            backgroundColor: '#ff4500', // Updated background color
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Pulsing Phone Icon */}
            <Animatable.View
              animation="bounce"
              iterationCount="infinite"
              duration={1000}
              style={{ marginRight: 20, marginTop: 5 }}
            >
              <Icon name="phone" size={isTablet ? 30 : 20} color="white"/>
            </Animatable.View>
            <Text className= {`text-white ${subHeaderTextSize} font-bold`}>
              +880 185468 0565
            </Text>
          </View>
        </TouchableOpacity>

        {/* Contact Information */}
        <View style={{ alignItems: 'center', marginBottom: isTablet ? 20 : 10 }}>
          <Text style={{ color: '#333', fontSize: isTablet ? 30 : 14, fontWeight: 'bold' }}>Contact Us</Text>
          <Text style={{ color: '#555', fontSize: isTablet ? 24 : 12 }}>Email: arcedemy@gmail.com</Text>
          <Text style={{ color: '#555', fontSize: isTablet ? 24 : 12 }}>Address: Mirpur 13, Block B, Dhaka, Bangladesh</Text>
          <Text style={{ color: '#555', fontSize: isTablet ? 24 : 12, marginTop: isTablet?20:10, fontWeight: 'bold'}}>Developed by: Khair IT Solutions</Text>
        </View>

        {/* Social Media Links */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: isTablet ? 20 : 10 }}>
          {/* Facebook */}
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <Icon name="facebook" size={isTablet ? 40 : 20} color="#3b5998" style={{ marginHorizontal: isTablet ? 30 : 10 }} />
          </TouchableOpacity>
          {/* Twitter */}
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <Icon name="twitter" size={isTablet ? 40 : 20} color="#00acee" style={{ marginHorizontal: isTablet ? 30 : 10 }} />
          </TouchableOpacity>
          {/* Instagram */}
          <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
            <Icon name="instagram" size={isTablet ? 40 : 20} color="#C13584" style={{ marginHorizontal: isTablet ? 30 : 10 }} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default Footer;
