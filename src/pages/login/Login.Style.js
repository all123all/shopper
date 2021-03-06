import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
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
  inputContainer: {
    
  },
  btnContainer: {
  },
  loginBtn: {
    borderRadius: 10,
    marginTop: '2%'
  },
  createBtn: {
    marginTop: '2%',
    backgroundColor: '#19b294',
    borderRadius: 10
  },
  forgotBtn: {
    marginTop: '2%',
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#696969'
  }
})