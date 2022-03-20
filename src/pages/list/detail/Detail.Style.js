import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const detailStyle = StyleSheet.create({
    bgImg: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',   
    },
    safeAreaView: {

    },
    coverContainer: {
        height: 300,
        width: '100%',
    },
    albumCover: {
        width: '100%',
        height: '100%',
    },
    mainContainer: {
        backgroundColor: "#fff",
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        padding: 20,
        height: windowHeight,
    },
    albumTitle: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    albumInfoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2%'
    },
    albumArtist: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 16
    },
    albumPrice: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 22
    },
    albumDesc: {

    },
    titleInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnAdd: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '2%'
    },
    btnAddIcon: {
        color: '#2288dc'
    },
    btnAddText: {
        color: '#2288dc',
        fontSize: 16,
        fontWeight: 'bold'
    },
    floatingAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
        justifyContent: 'space-between',
    },
    btnReturn: {
        backgroundColor: '#2288dc',
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 12,
        padding: 10
    },
    btnReturnIcon: {
        color: '#fff'
    },
    btnReturnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnBuy: {
        backgroundColor: '#82b440',
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 12,
        padding: 10
    },
    btnBuyIcon: {
        color: '#fff'
    },
    btnBuyText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
    },
    modalBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    btnModalCart: {
        backgroundColor: '#82b440',
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 8,
        padding: 5,
    },
    btnModalReturn: {
        backgroundColor: '#2288dc',
        width: '49%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 8,
        padding: 5
    },
})