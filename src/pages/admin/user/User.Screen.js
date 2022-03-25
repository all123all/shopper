import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Divider, ListItem, Icon } from 'react-native-elements';
import { userStyle } from './User.Style';

export default function User({navigation}) {
    const users = [
        {
            userName: 'John Doe',
            userEmail: 'test1@mail.com',
            userPassword: '12345678'
        },
      ]
  return (
    <View style={userStyle.mainContainer}>
        <View style={userStyle.registerContainer}>
            <View style={userStyle.headerContainer}>
                <TouchableOpacity style={userStyle.headerIcon}>
                    <Icon 
                        name="arrow-left"
                        size={50}
                        color="#696969"
                        onPress={() => navigation.navigate('Admin')}
                    />
                </TouchableOpacity>                
                <Text style={userStyle.headerText}>REGISTER NEW USER HERE</Text>
            </View>
            <View style={userStyle.inputContainer}>
                <Input 
                    placeholder='Full Name'
                />
                <Input
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={userStyle.registerBtn}>
                    <Text style={userStyle.registerBtnText}>Save</Text>
                </TouchableOpacity>
            </View>            
        </View>
        <View style={userStyle.horizontalLine}/>
        <ScrollView style={userStyle.listContainer}>
                {users.map((l, i) => (
                    <ListItem key={i} bottomDivider onPress={() => {}} style={userStyle.userCard} >
                        <ListItem.Content>                        
                            <View style={userStyle.albumInfo}>
                                <ListItem.Title style={userStyle.albumName} >{l.userName}</ListItem.Title>
                                <ListItem.Subtitle style={userStyle.albumArtist} >{l.userEmail}</ListItem.Subtitle>                            
                                <Text style={userStyle.albumPrice} >{l.userPassword}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
        </ScrollView>
    </View>
  );
}