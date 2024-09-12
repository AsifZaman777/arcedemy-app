import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import SuccessDrawer from '../components/SuccessDrawer'; // Assuming SuccessDrawer is a component

const Home = () => {
  const [avatar, setAvatar] = useState(null); // State to store avatar (set a default image if needed)
  const [name, setName] = useState('John Doe');
  const [curriculum, setCurriculum] = useState('Cambridge');
  const [level, setLevel] = useState('A2');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => alert('Avatar clicked!')}>
         
            {avatar ? (
              <Image
                source={{ uri: avatar }} // Replace this URI with a local image if needed
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
            ) : (
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  backgroundColor: '#ccc',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="user" size={24} color="#fff" />
              </View>
            )}
        
        </TouchableOpacity>
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontSize: 14, color: 'gray' }}>Curriculum: {curriculum}</Text>
          <Text style={{ fontSize: 14, color: 'gray' }}>Level: {level}</Text>
        </View>
      </View>

      {/* Placeholder Section: Cards/Progress Bars */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#f9c2ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Progress</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            backgroundColor: '#90cdf4',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Progress</Text>
        </View>
      </View>

      {/* Success Drawer Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#ff6347',
          padding: 16,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={() => navigation.openDrawer()} // Assuming this opens a drawer
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Open Success Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
