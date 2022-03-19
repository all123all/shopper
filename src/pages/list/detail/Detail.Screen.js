import { View, ScrollView, Image, TouchableOpacity, ImageBackground } from "react-native"
import { detailStyle } from "./Detail.Style"
import { Button, Input, Text, ListItem, Avatar, FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Detail() {
    return(
        
            <ImageBackground source={require('../../../img/2.jpg')} resizeMode="cover"  style={detailStyle.bgImg}>
                <ScrollView style={detailStyle.safeAreaView}>
                    <View style={detailStyle.coverContainer}></View>
                    <View style={detailStyle.mainContainer}>
                        <View style={detailStyle.titleInfoView} >
                            <Text style={detailStyle.albumTitle} >Starboy</Text>
                            <TouchableOpacity style={detailStyle.btnAdd}>
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
                            <TouchableOpacity style={detailStyle.btnReturn} >
                                <Icon
                                    name='arrow-circle-o-left'
                                    size={29}
                                    style={detailStyle.btnReturnIcon}
                                />
                                <Text style={detailStyle.btnReturnText} >Return</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={detailStyle.btnBuy} >
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