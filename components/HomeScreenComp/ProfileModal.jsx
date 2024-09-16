import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Card } from "@rneui/themed";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";

// Get screen dimensions
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

// Define dynamic text sizes based on screen size
const headerTextSize = isTablet ? 24 : 18;
const subHeaderTextSize = isTablet ? 20 : 14;
const smallTextSize = isTablet ? 20 : 16;

const ProfileModal = ({ isVisible, onClose, user }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          paddingVertical: isTablet ? 30 : 20,
          paddingHorizontal: isTablet ? 40 : 20,
          elevation: 10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        {/* Header with Avatar and Close Button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={user.avatar}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: headerTextSize }}>
                {user.name}
              </Text>
              <Text style={{ color: "gray", fontSize: subHeaderTextSize }}>
                {user.curriculum} | {user.level}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Icon name="times" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Option Cards */}
        <TouchableOpacity>
          <Card
            containerStyle={{
              borderRadius: 10,
              backgroundColor: "#f3f4f6",
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: headerTextSize }}>
                Perks and Benefits
              </Text>
              <Icon name="chevron-right" size={20} color="gray" />
            </View>
            <Text style={{ fontSize: smallTextSize, color: "gray" }}>
              Learn like a king
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            containerStyle={{
              borderRadius: 10,
              backgroundColor: "#f3f4f6",
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: headerTextSize }}>
                Help and Feedback
              </Text>
              <Icon name="chevron-right" size={20} color="gray" />
            </View>
            <Text style={{ fontSize: smallTextSize, color: "gray" }}>
              Ask for any query and support
            </Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card
            containerStyle={{
              borderRadius: 10,
              backgroundColor: "#f3f4f6",
              marginBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: headerTextSize }}>Profile Update</Text>
              <Icon name="chevron-right" size={20} color="gray" />
            </View>
            <Text style={{ fontSize: smallTextSize, color: "gray" }}>
              Update your information
            </Text>
          </Card>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity onPress={() => alert("Logout pressed!")}>
          <View
            style={{
              backgroundColor: "red",
              borderRadius: 10,
              padding: 16,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: headerTextSize,
                fontWeight: "bold",
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <TouchableOpacity
          onPress={() => alert("Terms and Conditions clicked!")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "orange",
              marginTop: 20,
              fontSize: smallTextSize,
              fontWeight: "bold",
            }}
          >
            Terms and conditions
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ProfileModal;
