import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Pages
import Login from './pages/login/Login.Screen';
import List from './pages/list/List.Screen';
import Detail from './pages/list/detail/Detail.Screen';
import Cart from './pages/cart/Cart.Screen';
import Checkout from './pages/checkout/Checkout.Screen';
import Message from './pages/checkout/message/Message.Screen';
import Admin from './pages/admin/Admin.Screen';
import User from './pages/admin/user/User.Screen';
import Product from './pages/admin/product/Product.Screen';
import Shopping from './pages/admin/shopping/Shopping.Screen';

// const { Navigator, Screen } = createStackNavigator();
const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Screen name="List" component={List}></Screen>
            <Screen name="Detail" component={Detail}></Screen>
            <Screen name="Cart" component={Cart}></Screen>
            <Screen name="Checkout" component={Checkout}></Screen>
            <Screen name="Message" component={Message}></Screen>
            <Screen name="Admin" component={Admin}></Screen>
            <Screen name="User" component={User}></Screen>
            <Screen name="Product" component={Product}></Screen>
            <Screen name="Shopping" component={Shopping}></Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;
