import { Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Input, Divider, ListItem, Icon } from 'react-native-elements';
import { userStyle } from './User.Style';
import { useEffect, useState } from "react";
import { db, auth } from "../../../firebase";
import { doc, setDoc, firestore, collection, addDoc, getDocs } from "firebase/firestore";
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function User({navigation}) {
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userCollectionRef = collection(db, 'user');

    useEffect(() =>{
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers();
    }, []);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('Success!');
            const user = userCredentials.user;
            console.log(user);
            addDoc(userCollectionRef, {
                email: email,
                password: password
            })
            navigation.navigate('Admin');
            Alert.alert('Success! New user Created!');
        })
        .catch(error => {
            console.log(error);
            Alert.alert(error.message)
        })
    }

    auth.onAuthStateChanged(user => {
        // db.collection('guides').onSnapshot(snapshot => {
            
        // })
        console.log(user.email)
    })

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
                    placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={userStyle.registerBtn} onPress={handleCreateAccount} >
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