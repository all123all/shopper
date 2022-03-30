import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, ImageBackground, Modal } from "react-native"
import { detailStyle } from "./Detail.Style"
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from 'firebase/firestore';

class Detail extends Component {
    state = {
        modalVisible: false
    };
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render(){
        const { modalVisible } = this.state;
        const {artist, name, cover, description, price} = this.props.route.params;
        const coverImg = {uri: cover}

        const handleViewCart = () => {
            this.setModalVisible(!modalVisible)
            this.props.navigation.navigate('Cart')
        }

        const addToCart = () => {
            this.setModalVisible(true)
            firestore()
            .collection('cart')
            .add({
                name,
                price
            })
        }
        return(
            <ImageBackground source={coverImg} resizeMode="cover"  style={detailStyle.bgImg}>
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
                                <Text style={detailStyle.modalText}>Success! The album {name} now is in your Cart.</Text>
                                <View style={detailStyle.modalBtnContainer}>
                                    <TouchableOpacity style={detailStyle.btnModalReturn} onPress={() => this.setModalVisible(!modalVisible)} >
                                        <Icon
                                            name='arrow-circle-o-left'
                                            size={15}
                                            style={detailStyle.btnReturnIcon}
                                        />
                                        <Text style={detailStyle.btnReturnText}>Close</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={detailStyle.btnModalCart} onPress={() => handleViewCart()} >
                                        <Text style={detailStyle.btnBuyText}>View cart</Text>
                                        <Icon
                                            name='shopping-cart'
                                            size={15}
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
                            <Text style={detailStyle.albumTitle}>{name}</Text>
                            <TouchableOpacity style={detailStyle.btnAdd} onPress={addToCart} >
                                <Text style={detailStyle.btnAddText} >Add to cart</Text>
                                <Icon
                                    name='shopping-cart'
                                    size={35}
                                    style={detailStyle.btnAddIcon}
                                />
                            </TouchableOpacity>                            
                        </View>
                        <View style={detailStyle.albumInfoView}>
                            <Text style={detailStyle.albumArtist}>{artist}</Text>
                            <Text style={detailStyle.albumPrice}>{price}</Text>
                        </View>
                        <Text style={detailStyle.albumDesc}>{description}</Text>
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