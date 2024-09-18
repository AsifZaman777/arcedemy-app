import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { Card } from "@rneui/themed";

//components
import ProgressCard from "../components/HomeScreenComp/ProgressCard";
import AnalyticsCard from "../components/HomeScreenComp/AnalyticsCard";
import PanelOptionCard from "../components/HomeScreenComp/PanelOptionCard";
import ProfileModal from "../components/HomeScreenComp/ProfileModal";

//imports data
import userData from "../data/userData";

// Get screen dimensions
const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const Home = () => {
  const [user, setUser] = useState(userData[0]); //current user

  const [refreshing, setRefreshing] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false); 

  const navigation = useNavigation();

  // Define dynamic styles for different screen sizes
  const avatarSize = isTablet ? 80 : 40;
  const smallTextSize = isTablet ? "text-lg" : "text-xs";
  const headTextSize = isTablet ? "text-2xl" : "text-base";
  const paddingSize = isTablet ? "px-10 py-6" : "px-5 py-4";

  // Function to handle pull-to-refresh action
  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request, then stop the refreshing
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Function to toggle Profile Modal visibility
  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

//dynamic fetching of avatar from th ibb link
  const avatarSource = user.avatar
    ? { uri: user.avatar }
    : null;

  return (
    <View className="flex-1 bg-slate-200">
      {/* Set StatusBar appearance */}
      <StatusBar
        barStyle={Platform.OS === "android" ? "dark-content" : "dark-content"}
        backgroundColor={Platform.OS === "android" ? "white" : "white"}
      />

      {/* SafeAreaView for iOS status bar padding */}
      <SafeAreaView className="bg-white">
        {/* Top Bar */}
        <View
          className={`flex-row items-center justify-between bg-white ${paddingSize}`}
          style={{
            elevation: 10, // Adds shadow on Android
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 2 }, // For iOS shadow
            shadowOpacity: 0.1,
            shadowRadius: 10,
          }}
        >
          <View className="flex-row items-center">
            <TouchableOpacity onPress={toggleProfileModal}>
              {avatarSource ? (
                <Image
                  source={avatarSource}
                  style={{ width: avatarSize, height: avatarSize }}
                  className="rounded-full"
                />
              ) : (
                <View
                  style={{ width: avatarSize, height: avatarSize }}
                  className="rounded-full bg-orange-400 justify-center items-center"
                >
                  <Icon name="user" size={avatarSize / 2} color="#fff" />
                </View>
              )}
            </TouchableOpacity>

            <View className="ml-4">
              <Text className={`text-orange-500 font-bold ${headTextSize}`}>
                {user.name}
              </Text>
              <Text className={`text-gray-600 ${smallTextSize}`}>
                Curriculum: {user.curriculum}
              </Text>
              <Text className={`text-gray-600 ${smallTextSize}`}>
                Level: {user.level}
              </Text>
            </View>
          </View>

          {/* Three Dots Menu */}
          <TouchableOpacity onPress={toggleProfileModal}>
            <Icon
              name="more-vertical"
              size={isTablet ? 32 : 24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Scrollable Content with Pull-to-Refresh */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }} // Make sure content stretches to fill the ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ marginBottom: isTablet ? -80 : -20 }}>
          <ProgressCard />
        </View>

        <View style={{ marginBottom: isTablet ? -80 : -20 }}>
          <AnalyticsCard />
        </View>

        <View style={{ marginBottom: isTablet ? -80 : -20 }}>
          <PanelOptionCard />
        </View>

        <View style={{ marginBottom: isTablet ? 80 : 60 }}></View>
      </ScrollView>

      {/* Profile Modal and prop drill */}
      <ProfileModal 
        isVisible={isProfileModalVisible} 
        onClose={toggleProfileModal} 
        user={user} 
      />
    </View>
  );
};

export default Home;
