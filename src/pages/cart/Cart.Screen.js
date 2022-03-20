import { SafeAreaView, View, ActivityIndicator, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Button, Text, ListItem, Avatar, Image, FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { cartStyle } from "./Cart.Style";

export default function Cart() {
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
        <View style={cartStyle.safeAreaView}>
            <View style={cartStyle.floatingContainer}>
                <TouchableOpacity style={cartStyle.floatingContainerBtnCancel} >
                    <Text style={cartStyle.floatingContainerBtnCancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={cartStyle.floatingContainerBtnContinue}
                    onPress={() => {}}>
                    <Text style={cartStyle.floatingContainerBtnContinueText}>Pay now!</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={cartStyle.mainContainer}>
                {albums.map((l, i) => (
                    <ListItem key={i} bottomDivider onPress={() => {}} style={cartStyle.albumCard}>
                        <Image
                            source={{uri: l.albumCover}}
                            style={cartStyle.albumCover}
                            PlaceholderContent={<ActivityIndicator />}/>
                        <ListItem.Content>                        
                            <View style={cartStyle.albumInfo}>
                                <ListItem.Title style={cartStyle.albumName} >{l.albumName}</ListItem.Title>
                                <ListItem.Subtitle style={cartStyle.albumArtist} >{l.artistName}</ListItem.Subtitle>                            
                                <Text style={cartStyle.albumPrice} >U$ {l.price}</Text>
                            </View>
                        </ListItem.Content>
                        <View style={cartStyle.albumCounterContainer}>
                            <TouchableOpacity onPress={() => {}} style={cartStyle.albumCounterContainerBtn}>
                                <Icon
                                    name="caret-up"
                                    color="green" size={35}
                                />
                            </TouchableOpacity>
                            <TextInput
                                keyboardType="numeric"
                                maxLength={2}
                                defaultValue="1"
                                style={cartStyle.albumCounterInput}
                            />
                            <TouchableOpacity onPress={() => {}} style={cartStyle.albumCounterContainerBtn}>
                                <Icon
                                    name="caret-down"
                                    color="red" size={35}
                                />
                            </TouchableOpacity>                            
                        </View>
                    </ListItem>
                ))}
            </ScrollView>
            
        </View>
    )
}