import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ScrollView,
  RefreshControl,
  Platform
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

// Components and screens
import ProgressCard from "../components/HomeScreenComp/ProgressCard";
import AnalyticsCard from "../components/HomeScreenComp/AnalyticsCard";
import PanelOptionCard from "../components/HomeScreenComp/PanelOptionCard";
import ProfileModal from "../components/HomeScreenComp/ProfileModal";
import Footer from "../components/HomeScreenComp/Footer";
import Courses from "../screens/Courses";
import Profile from "../screens/Profile";

// Imports data
import userData from "../data/userData";

// Get screen dimensions
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  const [user, setUser] = useState(userData[0]); 
  const [refreshing, setRefreshing] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  const avatarSize = isTablet ? 80 : 40;
  const smallTextSize = isTablet ? "text-lg" : "text-xs";
  const headTextSize = isTablet ? "text-2xl" : "text-base";
  const paddingSize = isTablet ? "px-10 py-6" : "px-5 py-4";

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };


  const avatarSource = user.avatar ? { uri: user.avatar } : null;

  return (
    <View className="flex-1 bg-slate-200">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView className="bg-white">
        <View
          className={`flex-row items-center justify-between bg-white ${paddingSize}`}
          style={{
            elevation: 10,
            shadowColor: "gray",
            shadowOffset: { width: 0, height: 2 },
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

          <TouchableOpacity onPress={toggleProfileModal}>
            <Icon name="more-vertical" size={isTablet ? 32 : 24} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
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
        <View style={{ marginBottom: isTablet ? 0 : 20 }}>
          <PanelOptionCard />
        </View>
        <View style={{ marginBottom: isTablet ? 80 : 20 }}>
          <Footer />
        </View>

        <View style={{ marginBottom: isTablet ? 80 : 100 }}>
        </View>
      </ScrollView>

      <ProfileModal 
        isVisible={isProfileModalVisible} 
        onClose={toggleProfileModal} 
        user={user} 
      />
    </View>
  );
};

// Main Home component with bottom tab navigation
const Home = () => {
  const isAndroid = Platform.OS === "android";
  const { width } = Dimensions.get("window");
  const isTablet = width >= 768; // Determines if the device is a tablet

  return (
    <Tab.Navigator
      screenOptions={({ route}) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home";
          } else if (route.name === "Courses") {
            iconName = "book";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return <Icon name={iconName} size={isTablet ? 28 : size} color={color} />; // Adjust icon size for tablets
        },
        
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: isTablet ? 22 : 12, // Adjust font size for tablets
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          opacity: 0.95,
          elevation: 10,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          height: isTablet ? (isAndroid ? 90 : 100) : (isAndroid ? 70 : 80), // Adjust height for Android/iOS
          borderRadius: 15,
          marginHorizontal: isTablet ? 50 : 20,
          position: 'absolute',
          bottom: isAndroid ? 10 : 20, // Adjust bottom position for Android/iOS
          paddingBottom: (isAndroid ? 0 : 10), // Adjust bottom padding for iOS
          paddingHorizontal: 20,
        },
        tabBarItemStyle: {
          paddingVertical: isAndroid ? 10 : 5, // Slimmer padding for iOS
          marginHorizontal: 10,
          borderRadius: 10,
          marginTop: isAndroid ? 0 : 5, // Adjust margin on top for iOS for balance
          
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarLabel: "Courses",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
