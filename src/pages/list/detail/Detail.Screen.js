import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, ImageBackground, Modal } from "react-native"
import { detailStyle } from "./Detail.Style"
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Detail extends Component {
    state = {
        modalVisible: false //change to false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render(){
        const { modalVisible } = this.state;

        const handleViewCart = () => {
            this.setModalVisible(!modalVisible)
            this.props.navigation.navigate('Cart')
        }
        return(
            <ImageBackground source={require('../../../img/2.jpg')} resizeMode="cover"  style={detailStyle.bgImg}>
                <ScrollView style={detailStyle.safeAreaView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!modalVisible);}}
                    >
                        <View style={detailStyle.centeredView}>
                            <View style={detailStyle.modalView}>
                                <Icon
                                    name="check-circle"
                                    size={65}
                                    color="#82b440"
                                />
                                <Text style={detailStyle.modalText}>Success! This album now is in your Cart.</Text>
                                <View style={detailStyle.modalBtnContainer}>
                                    <TouchableOpacity style={detailStyle.btnModalReturn} onPress={() => this.setModalVisible(!modalVisible)} >
                                        <Icon
                                            name='arrow-circle-o-left'
                                            size={18}
                                            style={detailStyle.btnReturnIcon}
                                        />
                                        <Text style={detailStyle.btnReturnText}>Return</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={detailStyle.btnModalCart} onPress={() => handleViewCart()} >
                                        <Text style={detailStyle.btnBuyText}>View cart</Text>
                                        <Icon
                                            name='shopping-cart'
                                            size={18}
                                            style={detailStyle.btnBuyIcon}
                                        />
                                    </TouchableOpacity>                                    
                                </View>                            
                            </View>
                        </View>
                    </Modal>
                    <View style={detailStyle.coverContainer}></View>
                    <View style={detailStyle.mainContainer}>
                        <View style={detailStyle.titleInfoView} >
                            <Text style={detailStyle.albumTitle} >Starboy</Text>
                            <TouchableOpacity style={detailStyle.btnAdd} onPress={() => this.setModalVisible(true)} >
                                <Text style={detailStyle.btnAddText} >Add to cart</Text>
                                <Icon
                                    name='shopping-cart'
                                    size={35}
                                    style={detailStyle.btnAddIcon}
                                />
                            </TouchableOpacity>                            
                        </View>
                        <View style={detailStyle.albumInfoView}>
                            <Text style={detailStyle.albumArtist}>The Weeknd</Text>
                            <Text style={detailStyle.albumPrice}>U$ 9.99</Text>
                        </View>
                        <Text style={detailStyle.albumDesc}>Starboy is the third studio album by Canadian singer-songwriter the Weeknd, released on November 25, 2016, through XO and Republic Records. It features guest appearances from Daft Punk, Lana Del Rey, Kendrick Lamar, and Future. As the album's executive producers, the Weeknd and Doc McKinney enlisted a variety of producers such as Diplo, Cashmere Cat, Metro Boomin, Frank Dukes, and Labrinth, among others. Starboy is the third studio album by Canadian singer-songwriter the Weeknd, released on November 25, 2016, through XO and Republic Records. It features guest appearances from Daft Punk, Lana Del Rey, Kendrick Lamar, and Future. As the album's executive producers, the Weeknd and Doc McKinney enlisted a variety of producers such as Diplo, Cashmere Cat, Metro Boomin, Frank Dukes, and Labrinth, among others. </Text>
                        <View style={detailStyle.floatingAction}>
                            <TouchableOpacity style={detailStyle.btnReturn} onPress={() => this.props.navigation.navigate('List')}>
                                <Icon
                                    name='arrow-circle-o-left'
                                    size={29}
                                    style={detailStyle.btnReturnIcon}
                                />
                                <Text style={detailStyle.btnReturnText} >Return</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={detailStyle.btnBuy} onPress={() => this.props.navigation.navigate('Checkout')}>
                                <Text style={detailStyle.btnBuyText} >Buy Now!</Text>
                                <Icon
                                    name='dollar'
                                    size={29}
                                    style={detailStyle.btnBuyIcon}
                                />
                            </TouchableOpacity>
                        </View>                  
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

export default Detail;