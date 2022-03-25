// import React from 'react';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserNavigator = () => (
    <Tab.Navigator initialRouteName="List">
        <Tab.Screen name="List" component={List}></Tab.Screen>
        <Tab.Screen name="Cart" component={Cart}></Tab.Screen>
    </Tab.Navigator>
)

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Screen name="UserNavigator" component={UserNavigator}></Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
            <Stack.Screen name="Checkout" component={Checkout}></Stack.Screen>
            <Stack.Screen name="Message" component={Message}></Stack.Screen>
            {/* Admin Screens */}
            <Stack.Screen name="Admin" component={Admin}></Stack.Screen>
            <Stack.Screen name="Shopping" component={Shopping}></Stack.Screen>
            <Stack.Screen name="User" component={User}></Stack.Screen>
            <Stack.Screen name="Product" component={Product}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;
