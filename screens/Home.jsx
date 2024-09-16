import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Image, StatusBar, Platform, SafeAreaView, Dimensions, ScrollView, RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProgressCard from '../components/HomeScreenComp/ProgressCard';
import AnalyticsCard from '../components/HomeScreenComp/AnalyticsCard';
import PanelOptionCard from '../components/HomeScreenComp/PanelOptionCard';
import ProfileModal from '../components/HomeScreenComp/ProfileModal'; // Import the ProfileModal component

import asif from '../assets/asif.png'; // User's avatar

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const Home = () => {
  const [user, setUser] = useState({
    name: 'Asif Zaman',
    curriculum: 'Cambridge',
    level: 'A2',
    avatar: asif,
  });

  const [refreshing, setRefreshing] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false); // State for controlling modal visibility

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View className="flex-1 bg-slate-200">
      <StatusBar barStyle={Platform.OS === 'android' ? 'dark-content' : 'dark-content'} backgroundColor={Platform.OS === 'android' ? 'white' : 'white'} />
      <SafeAreaView className="bg-white">
        <View className={`flex-row items-center justify-between bg-white px-5 py-4`} style={{ elevation: 10, shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 10 }}>
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => setProfileModalVisible(true)}>
              {user.avatar ? (
                <Image source={user.avatar} style={{ width: 40, height: 40 }} className="rounded-full" />
              ) : (
                <View style={{ width: 40, height: 40 }} className="rounded-full bg-orange-400 justify-center items-center">
                  <Icon name="user" size={20} color="#fff" />
                </View>
              )}
            </TouchableOpacity>

            <View className="ml-4">
              <Text className={`text-orange-500 font-bold text-base`}>{user.name}</Text>
              <Text className={`text-gray-600 text-xs`}>Curriculum: {user.curriculum}</Text>
              <Text className={`text-gray-600 text-xs`}>Level: {user.level}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => alert('Three dot menu clicked!')}>
            <Icon name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{ marginBottom: -20 }}>
          <ProgressCard />
        </View>
        <View style={{ marginBottom: -20 }}>
          <AnalyticsCard />
        </View>
        <View style={{ marginBottom: -20 }}>
          <PanelOptionCard />
        </View>



      </ScrollView>

      {/* Profile Modal */}
      <ProfileModal isVisible={isProfileModalVisible} onClose={() => setProfileModalVisible(false)} user={user} />
    </View>
  );
};

export default Home;
