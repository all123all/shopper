import React from 'react';
import { SafeAreaView, View, Text, Alert } from "react-native"
import { registerStyle } from "./Register.Style"
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useEffect, useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

function Register({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('Success!');
            const user = userCredentials.user;
            console.log(user);
            Alert.alert('Success! Now you have to login using your Email and Password.');
            navigation.navigate('Login');
        })
        .catch(error => {
            console.log(error);
            Alert.alert(error.message)
        })
    }

    return(
        <SafeAreaView style={registerStyle.safeAreaView} >
            <View style={registerStyle.mainContainer} >
                <View style={registerStyle.logoContainer} >
                    <Icon style={registerStyle.logoIcon} name="music" color={"#2288dc"} size={50} />
                    <Text style={registerStyle.logoText} >Shopper</Text>
                </View>
                <View style={registerStyle.inputContainer} >
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
                        min
                    />
                </View>
                <View style={registerStyle.btnContainer} >
                    <Button
                        title="Create"
                        buttonStyle={registerStyle.loginBtn}
                        // onPress={() => navigation.navigate('Login')}
                        onPress={handleCreateAccount}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Register;