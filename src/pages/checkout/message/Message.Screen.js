import { SafeAreaView, View, ActivityIndicator, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Button, Text, ListItem, Avatar, Image, FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { messageStyle } from "./Message.Style";

export default function Message() {
    return(
        <SafeAreaView style={messageStyle.safeAreaView}>
            <View style={messageStyle.mainContainer}>
                <Icon
                    name="flag-checkered"
                    size={150}
                    style={messageStyle.icon}
                    color="#82b440"
                />
                <Text style={messageStyle.mainText}>Success! Now you can return. Just press the button bellow</Text>
                <TouchableOpacity style={messageStyle.btn} onPress={() => {}}>
                    <Text style={messageStyle.btnText}>Return</Text>
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
    )
}