import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Card } from "@rneui/themed";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import TermsAndCondition from "../../screens/TermsAndCondition";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const headerTextSize = isTablet ? "text-4xl" : "text-xl";
const subHeaderTextSize = isTablet ? "text-2xl" : "text-sm";
const smallTextSize = isTablet ? "text-lg" : "text-sm";
const responsiveAvatarSize = isTablet ? 100 : 50;
const responsiveBorderRadius = isTablet ? 50 : 25;
const responsivePadding = isTablet ? "p-8" : "p-4";
const responsiveMb = isTablet ? "mb-5" : "mb-5";

const ProfileModal = ({ isVisible, onClose, user }) => {
  const navigation = useNavigation();

  // Ensure avatar is fetched correctly from the JSON data
  const avatarSource = user.avatar
    ? { uri: user.avatar }
    : null;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View className={`bg-white rounded-2xl shadow-lg ${responsivePadding}`}>
        <View className={`flex-row justify-between items-center ${isTablet?'mb-10':'mb-5'}`}>
          <View className="flex-row items-center">
            <Image
              source={avatarSource}
              style={{
                width: responsiveAvatarSize,
                height: responsiveAvatarSize,
                borderRadius: responsiveBorderRadius,
              }}
            />
            <View className="ml-4">
              <Text className={`font-bold ${headerTextSize}`}>
                {user.name}
              </Text>
              <Text className={`text-gray-500 ${subHeaderTextSize}`}>
                {user.curriculum} | {user.level}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" size={isTablet ? 48 : 24} color="red" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Card containerStyle={{ borderRadius: 10, backgroundColor: "#f3f4f6", marginBottom: isTablet ? 40 : 15 }}>
            <View className="flex-row justify-between items-center">
              <Text className={`font-semibold ${headerTextSize}`}>
                Perks and Benefits
              </Text>
              <Icon name="chevron-right" size={isTablet ? 30 : 20} color="orange" />
            </View>
            <Text className={`text-gray-500 ${subHeaderTextSize}`}>
              Learn like a king
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={{ borderRadius: 10, backgroundColor: "#f3f4f6", marginBottom: isTablet ? 40 : 15 }}>
            <View className="flex-row justify-between items-center">
              <Text className={`font-semibold ${headerTextSize}`}>
                Help and Feedback
              </Text>
              <Icon name="chevron-right" size={isTablet ? 30 : 20} color="orange" />
            </View>
            <Text className={`text-gray-500 ${subHeaderTextSize}`}>
              Ask for any query and support
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={{ borderRadius: 10, backgroundColor: "#f3f4f6", marginBottom: isTablet ? 40 : 15 }}>
            <View className="flex-row justify-between items-center">
              <Text className={`font-semibold ${headerTextSize}`}>
                Profile Update
              </Text>
              <Icon name="chevron-right" size={isTablet ? 30 : 20} color="orange" />
            </View>
            <Text className={`text-gray-500 ${subHeaderTextSize}`}>
              Update your information
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          onClose();
          navigation.navigate("");
        }}>
          <View className="bg-red-500 rounded-lg py-3 mt-5 items-center">
            <Text className={`text-white font-bold ${headerTextSize}`}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <TouchableOpacity
          onPress={() => {
            onClose(); 
            navigation.navigate("TermsAndCondition");
          }}
        >
          <Text className={`text-center text-orange-500 ${isTablet ? "mt-5" : "mt-3"} ${subHeaderTextSize} font-bold`}>
            Terms and conditions
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfileModal;
