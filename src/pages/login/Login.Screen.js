import { SafeAreaView, View, Text } from "react-native"
import { loginStyle } from "./Login.Style"
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
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
                    />
                </View>
                <View style={loginStyle.btnContainer} >
                    <Button
                        title="Login"
                        buttonStyle={loginStyle.loginBtn}
                    />
                    <Button
                        title="Forgot Password"
                        type="outline"
                        buttonStyle={loginStyle.forgotBtn}
                        onPress={() => {}}
                        disabled
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}