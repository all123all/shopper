import { Text, View, TouchableOpacity } from 'react-native';
import { adminStyle } from './Admin.Style';

export default function Admin({navigation}) {
  return (
    <View style={adminStyle.mainContainer}>
        <TouchableOpacity
            style={adminStyle.userBtn}
            onPress={() => navigation.navigate('User')}
        >
            <Text style={adminStyle.userBtnText}>View users</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={adminStyle.productBtn}
            onPress={() => navigation.navigate('Product')}
        >
            <Text style={adminStyle.productBtnText}>View Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={adminStyle.shoppingBtn}
            onPress={() => navigation.navigate('Shopping')}
        >
            <Text style={adminStyle.shoppingBtnText}>View shopping</Text>
        </TouchableOpacity>
    </View>
  );
}