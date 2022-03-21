import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon, ListItem, Input } from 'react-native-elements';
import { shoppingStyle } from './Shopping.Style';

export default function Shopping() {
    const users = [
        {
            userName: 'John Doe',
            purchaseId: 1,
            purchasePrice: 55.95,
            album: 'Starboy'
        },
        {
            userName: 'Jane Doe',
            purchaseId: 2,
            purchasePrice: 19.98,
            album: 'Led Zeppelin II'
        },
    ]
    return (
        <View style={shoppingStyle.mainContainer}>
            <View style={shoppingStyle.headerContainer}>
                <TouchableOpacity style={shoppingStyle.headerIcon}>
                    <Icon 
                        name="arrow-left"
                        size={50}
                        color="#696969"
                    />
                </TouchableOpacity>                
                <Text style={shoppingStyle.headerText}>VIEW ALL PURCHASES</Text>
            </View>       
            <ScrollView style={shoppingStyle.listContainer}>
                    {users.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={() => {}} style={shoppingStyle.userCard}>
                            <ListItem.Content>                        
                                <View style={shoppingStyle.albumInfo}>
                                    <ListItem.Title style={shoppingStyle.albumName}>Name: {l.userName}</ListItem.Title>
                                    <ListItem.Subtitle style={shoppingStyle.albumArtist}>ID: {l.purchaseId}</ListItem.Subtitle>                            
                                    <Text style={shoppingStyle.albumPrice}>Paid: {l.purchasePrice}</Text>
                                    <Text style={shoppingStyle.albumPrice}>Albums bought: {l.album}</Text>
                                </View>
                            </ListItem.Content>
                            <TouchableOpacity onPress={() => {}} style={shoppingStyle.deleteBtn}>
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