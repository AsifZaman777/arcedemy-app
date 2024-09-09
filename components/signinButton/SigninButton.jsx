import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SigninButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SigninButton

const styles = StyleSheet.create({
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "green",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
