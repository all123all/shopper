import { SafeAreaView, View, ActivityIndicator, ScrollView } from "react-native"
import { listStyle } from "./List.Style"
import { Button, Input, Text, ListItem, Avatar, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-web";

export default function List({navigation}) {

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
        <ScrollView style={listStyle.safeAreaView} >
            <View style={listStyle.mainContainer} >
                {albums.map((l, i) => (
                    <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Detail')} style={listStyle.albumCard} >
                        <Image
                            source={{uri: l.albumCover}}
                            style={listStyle.albumCover}
                            PlaceholderContent={<ActivityIndicator />}/>
                        <ListItem.Content>                        
                            <View style={listStyle.albumInfo}>
                                <ListItem.Title style={listStyle.albumName} >{l.albumName}</ListItem.Title>
                                <ListItem.Subtitle style={listStyle.albumArtist} >{l.artistName}</ListItem.Subtitle>                            
                                <Text style={listStyle.albumPrice} >U$ {l.price}</Text>
                            </View>
                            <Icon
                                name="shopping-cart"
                                onPress={() => navigation.navigate('Checkout')}
                                style={listStyle.albumAddCardIcon}
                                size={30}/>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </View>
        </ScrollView>
    )
}