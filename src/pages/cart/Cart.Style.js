import { StyleSheet } from "react-native";

export const cartStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    mainContainer: {
        paddingBottom: '20%'
    },
    floatingContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: 33,
        width: '100%',
    },
    floatingContainerBtnCancel: {
        backgroundColor: '#2288dc',
        width: '50%',
        alignItems: 'center',
        padding: 10
    },
    floatingContainerBtnCancelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
    floatingContainerBtnContinue: {
        backgroundColor: '#82b440',
        width: '50%',
        alignItems: 'center',
        padding: 10
    },
    floatingContainerBtnContinueText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
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
    albumCounterContainer: {
        alignItems: 'center',
    },
    albumCounterContainerBtn: {
        width: 50,
        alignItems: 'center'
    },
    albumCounterInput: {
        textAlign: 'center',
    }
})