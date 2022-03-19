import { SafeAreaView, View, Text } from "react-native"
import { homeStyle } from "./Home.Style"
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    return(
        <SafeAreaView>
            <Text style={{fontSize: 30}} >This is the Home page</Text>
        </SafeAreaView>
    )
}