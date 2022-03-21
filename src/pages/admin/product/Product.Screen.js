import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Divider, ListItem, Icon } from 'react-native-elements';
import { productStyle } from './Product.Style';

export default function Product() {
    const users = [
        {
            albumName: 'Exemplo 1',
            albumArtist: 'Henrique Marques',
            albumPrice: '19.99'
        },
      ]
  return (
    <View style={productStyle.mainContainer}>
        <View style={productStyle.registerContainer}>
            <View style={productStyle.headerContainer}>
                <TouchableOpacity style={productStyle.headerIcon}>
                    <Icon 
                        name="arrow-left"
                        size={50}
                        color="#696969"
                    />
                </TouchableOpacity>                
                <Text style={productStyle.headerText}>REGISTER NEW PRODUCT HERE</Text>
            </View>
            <View style={productStyle.inputContainer}>
                <Input 
                    placeholder='Album name'
                />
                <Input 
                    placeholder='Artist name'
                />
                <Input
                    placeholder='Price'
                    keyboardType='numeric'
                />
                <TouchableOpacity style={productStyle.registerBtn}>
                    <Text style={productStyle.registerBtnText}>Save</Text>
                </TouchableOpacity>
            </View>            
        </View>
        <View style={productStyle.horizontalLine}/>
        <ScrollView style={productStyle.listContainer}>
                {users.map((l, i) => (
                    <ListItem key={i} bottomDivider onPress={() => {}} style={productStyle.userCard} >
                        <ListItem.Content>                        
                            <View style={productStyle.albumInfo}>
                                <ListItem.Title style={productStyle.albumName} >{l.albumName}</ListItem.Title>
                                <ListItem.Subtitle style={productStyle.albumArtist} >{l.albumArtist}</ListItem.Subtitle>                            
                                <Text style={productStyle.albumPrice} >{l.albumPrice}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
        </ScrollView>
    </View>
  );
}