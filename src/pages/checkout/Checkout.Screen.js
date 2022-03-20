import { SafeAreaView, View, ActivityIndicator, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Button, Text, ListItem, Avatar, Image, FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { checkoutStyle } from "./Checkout.Style";

export default function Checkout() {
    const albums = [
        {
            artistName: 'The Weeknd',
            albumCover: 'https://upload.wikimedia.org/wikipedia/pt/3/39/The_Weeknd_-_Starboy.png',
            albumName: 'Starboy',
            price: 9.99
        },
        {
            artistName: 'Rome',
            albumCover: 'https://www.clear-spot.nl/public/img/I00/464/I00464134.jpg',
            albumName: 'Who Only Europe Know',
            price: 9.99
        },
        {
            artistName: 'Arctic Monkeys',
            albumCover: 'http://www.clicrbs.com.br/blog/fotos/195142post_foto.jpg',
            albumName: 'Humbug',
            price: 9.99
        },
      ]
    return(
        <View style={checkoutStyle.safeAreaView}>
            
        </View>
    )
}