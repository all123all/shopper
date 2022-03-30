import { StyleSheet } from "react-native";

export const productStyle = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#e5e5e0'
    },
    headerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        paddingTop: 33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerIcon: {
        marginLeft: '3%'
    },
    headerText: {
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginRight: '7%',
    },
    horizontalLine: {
        width: '95%',
        height: 1,
        backgroundColor: '#757575',
        alignSelf: 'center',
        marginTop: '3%'
    },
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    registerContainer: {
        width: '100%',
    },
    registerBtn: {
        backgroundColor: '#2288dc',
        padding: '3%',
        width: '95%',
        alignSelf: 'center'
    },
    registerBtnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    listContainer: {
        width: '100%'
    },
    userCard: {
        marginTop: '2%'
    },
    
    albumCard: {
        marginBottom: 10,
    },
    albumCover: {
        width: 75,
        height: 75
    },
    albumName: {
        fontSize: 18
    },
    albumArtist: {
        fontWeight: "bold",
        color: "gray"
    },
    albumPrice: {
        color: "green"
    },
    albumAddCardIcon: {
        color: "#2288dc",
        alignSelf: 'flex-end'
    },
    deleteBtn: {
        padding: '3%'
    },
})


//82b440 - green
//2288dc - blue