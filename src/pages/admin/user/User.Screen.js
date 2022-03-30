import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Input, Divider, ListItem, Icon } from 'react-native-elements';
import { userStyle } from './User.Style';
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { doc, setDoc, firestore, collection, addDoc, getDocs } from "firebase/firestore";

export default function User({navigation}) {
    const [user, setUser] = useState([]);
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userCollectionRef = collection(db, 'user');

    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setAlbum(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers();
    }, []);

    function addUser() {
        // setDoc(userCollectionRef, {
        //     fullName: fullName,
        //     email: email,
        //     password: password,
        //     type: 1
        // });

        db.collection("user").doc(email).set({
            fullName: fullName,
            email: email,
            password: password,
            type: 1
          }).then(function() {
            console.log("User created");
          });
          
    }

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
                    onChangeText={(text) => setFullname(text)}
                />
                <Input
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={userStyle.registerBtn} onPress={addUser} >
                    <Text style={userStyle.registerBtnText}>Save</Text>
                </TouchableOpacity>
            </View>            
        </View>
        <View style={userStyle.horizontalLine}/>
        <ScrollView style={userStyle.listContainer}>
                {user.map((user) => (
                    <ListItem key={user} bottomDivider onPress={() => {}} style={userStyle.userCard} >
                        <ListItem.Content>                        
                            <View style={userStyle.albumInfo}>
                                <ListItem.Title style={userStyle.albumName} >{user.email}</ListItem.Title>
                                <ListItem.Subtitle style={userStyle.albumArtist} >{user.password}</ListItem.Subtitle>                            
                                <Text style={userStyle.albumPrice} >{user.type}</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))}
        </ScrollView>
    </View>
  );
}