import { Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useEffect, useState } from "react";
import { Input, Divider, ListItem, Icon } from 'react-native-elements';
import { productStyle } from './Product.Style';
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import firestore from 'firebase/firestore'

export default function Product({navigation}) {
    const [album, setAlbum] = useState([]);
    const albumCollectionRef = collection(db, 'album');

    const [artist, setArtist] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState();

    useEffect(() =>{
        const getAlbums = async () => {
            const data = await getDocs(albumCollectionRef);
            setAlbum(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getAlbums();
    }, []);

    function seeDetails(){
        navigation.navigate('Detail', {
            artist: album.artist,
            name: album.name,
            cover: album.cover,
            description: album.description,
            price: album.price
        })
    }

    function addProduct(){
        addDoc(albumCollectionRef, {
            artist: artist,
            name: name,
            price: price
        })
        .then(() => {
            Alert.alert('New album added!');
            navigation.navigate('Admin')
        })
    }
    return (
        <View style={productStyle.mainContainer}>
            <View style={productStyle.registerContainer}>
                <View style={productStyle.headerContainer}>
                    <TouchableOpacity style={productStyle.headerIcon}>
                        <Icon 
                            name="arrow-left"
                            size={50}
                            color="#696969"
                            onPress={() => navigation.navigate('Admin')}
                        />
                    </TouchableOpacity>                
                    <Text style={productStyle.headerText}>REGISTER NEW PRODUCT HERE</Text>
                </View>
                <View style={productStyle.inputContainer}>
                    <Input 
                        placeholder='Album name'
                        onChangeText={(text) => setName(text)}
                    />
                    <Input 
                        placeholder='Artist name'
                        onChangeText={(text) => setArtist(text)}
                    />
                    <Input
                        placeholder='Price'
                        keyboardType='numeric'
                        onChangeText={(text) => setPrice(text)}
                    />
                    <TouchableOpacity style={productStyle.registerBtn} onPress={addProduct} >
                        <Text style={productStyle.registerBtnText}>Save</Text>
                    </TouchableOpacity>
                </View>            
            </View>
            <View style={productStyle.horizontalLine}/>
            <ScrollView style={productStyle.listContainer}>
                {album.map((album) => (
                    <ListItem key={album} bottomDivider onPress={seeDetails} style={productStyle.albumCard} >
                        <Image
                            source={{uri: album.cover}}
                            style={productStyle.albumCover}
                            PlaceholderContent={<ActivityIndicator />}/>
                        <ListItem.Content>                        
                            <View style={productStyle.albumInfo}>
                                <ListItem.Title style={productStyle.albumName} >{album.name}</ListItem.Title>
                                <ListItem.Subtitle style={productStyle.albumArtist} >{album.artist}</ListItem.Subtitle>                            
                                <Text style={productStyle.albumPrice} >U$ {album.price}</Text>
                            </View>
                        </ListItem.Content>
                        <TouchableOpacity onPress={() => {}} style={productStyle.deleteBtn}>
                                <Icon
                                    name="delete"
                                    size={30}
                                />
                            </TouchableOpacity>
                    </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}