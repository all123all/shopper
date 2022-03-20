import { SafeAreaView, View, ActivityIndicator, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Button, Text, ListItem, Avatar, Image, FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { checkoutStyle } from "./Checkout.Style";

export default function Checkout() {
    return(
        <SafeAreaView style={checkoutStyle.safeAreaView}>
            <View style={checkoutStyle.headerContainer}>
                <TouchableOpacity style={checkoutStyle.headerReturnBtn}>
                    <Icon
                        style={checkoutStyle.headerReturnBtnIcon}
                        name="arrow-circle-o-left"
                        size={25}
                    />
                </TouchableOpacity>
                <Text style={checkoutStyle.headerText}>CHECK OUT</Text>
            </View>
            <View style={checkoutStyle.inputContainer}>
                <Text style={checkoutStyle.midContainerText}>CREDIT CARD DETAILS</Text>
                <View style={checkoutStyle.firstLine}>
                    <TextInput
                        maxLength={19}
                        keyboardType="numeric"
                        placeholder="Card Number"
                        style={checkoutStyle.inputCardNumber}
                    />
                    <Icon name="cc-mastercard" size={30} color="#2288dc"/> 
                </View>
                <View style={checkoutStyle.secondLine}>
                    <TextInput
                        placeholder="Cardholder name"
                        style={checkoutStyle.inputName}
                    />
                    <Icon name="user-circle" size={30} color="#2288dc"/>
                </View>
                <View style={checkoutStyle.thirdLine}>
                    <TextInput
                        placeholder="00"
                        maxLength={2}
                        keyboardType="numeric"
                        style={checkoutStyle.inputNum}
                    />
                    <TextInput
                        placeholder="0000"
                        maxLength={4}
                        keyboardType="numeric"
                        style={checkoutStyle.inputNum}
                    />
                    <TextInput
                        placeholder="CVV"
                        keyboardType="numeric"
                        style={checkoutStyle.inputNum}
                        
                    />
                </View>
            </View>
            <View style={checkoutStyle.midContainer}>
                <Icon
                    style={checkoutStyle.midIcon}
                    name="credit-card"
                    size={75}
                />
                <Text style={checkoutStyle.midContainerValue}>U$ 55.95</Text>
            </View>
            <View style={checkoutStyle.paymentContainer}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={checkoutStyle.paymentBtn}
                >
                    <Text style={checkoutStyle.paymentText}>Confirm Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}