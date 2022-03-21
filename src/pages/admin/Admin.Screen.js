import { Text, View, TouchableOpacity } from 'react-native';
import { adminStyle } from './Admin.Style';

export default function Admin() {
  return (
    <View style={adminStyle.mainContainer}>
        <TouchableOpacity
            style={adminStyle.userBtn}
            onPress={() => {}}
        >
            <Text style={adminStyle.userBtnText}>View users</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={adminStyle.productBtn}
            onPress={() => {}}
        >
            <Text style={adminStyle.productBtnText}>View Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={adminStyle.shoppingBtn}
            onPress={() => {}}
        >
            <Text style={adminStyle.shoppingBtnText}>View shopping</Text>
        </TouchableOpacity>
    </View>
  );
}