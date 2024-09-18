import React from "react";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Determine screen size to adjust styles for tablet vs. mobile
const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const avatarSize = isTablet ? 80 : 40;
const smallTextSize = isTablet ? "text-xl" : "text-sm";
const headTextSize = isTablet ? "text-3xl" : "text-xl";
const paddingSize = isTablet ? "px-10 py-6" : "px-5 py-4";

const TermsAndCondition = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View
        className={`bg-white py-4 px-5 flex-row justify-between items-center ${paddingSize}`}
        style={{
          // shadow for android and ios
          shadowColor: 'gray',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0, // iOS shadow effect
          shadowRadius: 10,
          elevation: 10, // Android shadow effect
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={isTablet?40:20} color="orange" />
        </TouchableOpacity>
        <Text className={`text-orange-500 text-lg font-bold ${headTextSize}`}>Terms and Conditions</Text>
        <View />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        className={`px-5 ${paddingSize}`}
        contentContainerStyle={{ paddingBottom: 80 }} // Ensure space for footer button
        bounces={false} // Disable scroll bounce effect
        overScrollMode="never" // Prevent overscroll on Android
      >
        {/* Section 1 */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>Introduction</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            Welcome to our app. By accessing and using our app, you agree to be bound
            by the following terms and conditions. Please read them carefully to understand
            your rights and responsibilities while using the app. This agreement is a legally 
            binding contract between you and our company. It is important to review these terms regularly, 
            as they may change from time to time.
            {"\n"}{"\n"}
            Our app provides a platform for users to access services, engage with content, 
            and participate in various activities. By continuing to use the app, you acknowledge
            that you have read and understood these terms. If you do not agree with any part of the terms,
            please refrain from using the app. Your continued use signifies your acceptance of these terms.
          </Text>
        </View>

        {/* Section 2 */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>User Responsibilities</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            As a user, you agree to use the app only for lawful purposes and in accordance with these terms. 
            You are responsible for maintaining the confidentiality of your account information, 
            including your username and password, and for any and all activities that occur under your account. 
            It is your responsibility to ensure that your use of the app does not violate any applicable laws 
            or regulations.
            {"\n"}{"\n"}
            You agree to notify us immediately of any unauthorized use of your account or any other breach of security. 
            We are not liable for any loss or damage arising from your failure to comply with this responsibility. 
            You are solely responsible for any activity conducted through your account, and you agree to indemnify us 
            from any losses arising from such activity. Your account may be suspended or terminated if we suspect 
            any unauthorized use.
            {"\n"}{"\n"}
            You agree not to interfere with or disrupt the app's operation or the networks connected to the app. 
            Engaging in any activity that disrupts the app's functionality, including using scripts, robots, or 
            any other automated means, is strictly prohibited.
          </Text>
        </View>

        {/* Section 3 */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>Privacy Policy</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            We value your privacy and are committed to protecting your personal information. 
            Our Privacy Policy outlines how we collect, use, and safeguard your data when you use the app. 
            By using the app, you consent to the collection and use of your information in accordance with the Privacy Policy.
            {"\n"}{"\n"}
            We collect various types of information, including personal data, to enhance your experience with the app. 
            This may include your name, email address, contact details, and usage data. We may also collect information 
            about your interactions with the app, such as the pages you visit and the actions you take within the app.
            {"\n"}{"\n"}
            Our Privacy Policy describes the steps we take to ensure that your data is protected, including encryption and 
            secure storage methods. If you have any questions about how we handle your data or wish to exercise your rights 
            under applicable data protection laws, please contact us.
          </Text>
        </View>

        {/* Section 4 */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>Changes to the Terms</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            We reserve the right to modify these terms at any time. It is your responsibility to review the terms periodically. 
            Continued use of the app following changes means you accept the new terms. We will notify you of any significant 
            changes by posting updates within the app or sending notifications to your registered email address.
            {"\n"}{"\n"}
            Changes may include updates to our policies, new features, or adjustments to the terms governing your use of the app. 
            You are encouraged to review these terms regularly to ensure that you are aware of any modifications. 
            If you do not agree with any changes, you should discontinue use of the app immediately.
          </Text>
        </View>

        {/* Section 5 */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>Limitation of Liability</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            Under no circumstances shall we be held liable for any direct, indirect, incidental, or consequential damages 
            resulting from your use of our app. This includes, but is not limited to, loss of data, loss of profits, or 
            business interruptions arising from your use of or inability to use the app.
            {"\n"}{"\n"}
            We are not responsible for any errors, inaccuracies, or omissions in the content provided through the app. 
            Your reliance on any content, advice, or information provided through the app is at your own risk. 
            We do not guarantee the availability, reliability, or accuracy of the app or its content.
            {"\n"}{"\n"}
            In no event shall our liability exceed the amount paid by you, if any, for using the app. 
            Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability 
            for incidental or consequential damages. As a result, some of the above limitations may not apply to you.
          </Text>
        </View>

        {/* Add more sections as needed */}

        {/* Contact Us */}
        <View className="mb-5">
          <Text className={`${headTextSize} font-bold mb-2`}>Contact Us</Text>
          <Text className={`text-gray-600 ${smallTextSize} leading-relaxed`}>
            If you have any questions about these terms, please contact us at support@example.com. 
            We value your feedback and will respond to any inquiries regarding the terms and conditions 
            as promptly as possible. Our support team is available to assist you with any issues or concerns.
          </Text>
        </View>

        {/* Accept Button */}
        <View className="py-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-orange-500 py-3 mx-5 rounded-xl"
          >
            <Text className="text-white text-center text-lg font-bold">Accept</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsAndCondition;
