import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
  safeAreaView: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'center',
      backgroundColor: "#e5e5e0"
  },
  mainContainer: {
    backgroundColor: "#fff",
    width: '90%',
    alignSelf: "center",
    borderRadius: 15,
    padding: 12,
  },
  logoContainer: {
    alignSelf: 'center'
  },
  logoIcon: {
      alignSelf: 'center',
      margin: 9
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    color: "#2288dc",
  },
  loginBtn: {
    borderRadius: 10,
    backgroundColor: '#19b294'
  },
  forgotBtn: {
    marginTop: 8,
    borderRadius: 10
  }
})