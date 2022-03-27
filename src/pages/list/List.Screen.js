import { SafeAreaView, View, ActivityIndicator, ScrollView, Alert, Image } from "react-native"
import { listStyle } from "./List.Style"
import { Button, Input, Text, ListItem, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

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

      const [album, setAlbum] = useState([]);
      const albumCollectionRef = collection(db, 'album');

      useEffect(() =>{
          const getAlbums = async () => {
              const data = await getDocs(albumCollectionRef);
              setAlbum(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
          }
          getAlbums();
      }, []);

    return(
        <ScrollView style={listStyle.safeAreaView} >
            <View style={listStyle.mainContainer} >
                {album.map((album) => {
                    function putOnCart(){
                        Alert.alert('You add the album ' + album.name + ' on your cart!')
                    }
                    function seeDetails(){
                        navigation.navigate('Detail', {
                            artist: album.artist,
                            name: album.name,
                            cover: album.cover,
                            description: album.description,
                            price: album.price
                        })
                    }
                    return(
                        <View>
                            <ListItem key={album} bottomDivider onPress={seeDetails} style={listStyle.albumCard} >
                                <Image
                                    source={{uri: album.cover}}
                                    style={listStyle.albumCover}
                                    PlaceholderContent={<ActivityIndicator />}/>
                                <ListItem.Content>                        
                                    <View style={listStyle.albumInfo}>
                                        <ListItem.Title style={listStyle.albumName} >{album.name}</ListItem.Title>
                                        <ListItem.Subtitle style={listStyle.albumArtist} >{album.artist}</ListItem.Subtitle>                            
                                        <Text style={listStyle.albumPrice} >U$ {album.price}</Text>
                                    </View>
                                    <Icon
                                        name="shopping-cart"
                                        // onPress={() => navigation.navigate('Checkout')}
                                        onPress={putOnCart}
                                        style={listStyle.albumAddCardIcon}
                                        size={30}/>
                                </ListItem.Content>
                            </ListItem>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}