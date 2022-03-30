import React from 'react';
import { SafeAreaView, View, Text, Alert } from "react-native"
import { loginStyle } from "./Login.Style"
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useEffect, useState } from "react";
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';

function Login({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            const userEmail = email
            console.log(userEmail)
            console.log(user);
            navigation.navigate('UserNavigator', {
                screen: 'List',
                params: {
                    userEmail: userEmail
                }
            });
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }
    return(
        <SafeAreaView style={loginStyle.safeAreaView} >
            <View style={loginStyle.mainContainer} >
                <View style={loginStyle.logoContainer} >
                    <Icon style={loginStyle.logoIcon} name="music" color={"#2288dc"} size={50} />
                    <Text style={loginStyle.logoText} >Shopper</Text>
                </View>
                <View style={loginStyle.inputContainer} >
                    <Input
                        placeholder='Email'
                        keyboardType="email-address"
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='#2288dc'/>
                        }
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry={true}
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='#2288dc'/>
                        }
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={loginStyle.btnContainer} >
                    <Button
                        title="Login"
                        buttonStyle={loginStyle.loginBtn}
                        onPress={handleLogin}
                    />
                    <Button
                        title="Register"
                        buttonStyle={loginStyle.createBtn}
                        onPress={() => navigation.navigate('Register')}
                    />
                    <Button
                        title="I'm an Admin"
                        buttonStyle={loginStyle.forgotBtn}
                        onPress={() => navigation.navigate('Admin')}
                        titleStyle={{color: '#696969'}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Login;