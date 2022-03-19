import { StyleSheet } from "react-native";

export const detailStyle = StyleSheet.create({
    bgImg: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
         
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
        // fontFamily: 'monospace',
    },
    titleInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnAdd: {
        // backgroundColor: '#696969',
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
    }
})