import { StyleSheet } from "react-native";

export const shoppingStyle = StyleSheet.create({
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
    deleteBtn: {
        padding: '3%'
    },
    
    headerIcon: {
        marginLeft: '3%',
    },
    headerText: {
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginRight: '7%',
    },
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    listContainer: {
        width: '100%'
    },
    userCard: {
        marginTop: '2%'
    },
})
