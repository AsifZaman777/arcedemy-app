import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const isTablet = width >= 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: isTablet ? 40 : 20,
    marginTop: isTablet ? -100 : -200,
  },
  image: {
    width: isTablet ? 300 : 200,
    height: isTablet ? 300 : 200,
    resizeMode: "contain",
    marginBottom: isTablet ? 100 : 80,
  },
  input: {
    width: "100%",
    height: isTablet ? 60 : 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: isTablet ? 15 : 10,
  },
  signupText: {
    marginTop: isTablet ? 30 : 20,
    color: "orange",
    fontWeight: "bold",
    fontSize: isTablet ? 18 : 16,
  },
});

export default styles;
