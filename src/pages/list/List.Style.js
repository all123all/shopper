import { StyleSheet } from "react-native";

export const listStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#e5e5e0",
        paddingTop: 33,
    },
    headerContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    headerInput: {

    },
    headerInputIcon: {
        color: "gray",
    },
    mainContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 33,
    },
    albumCard: {
        marginBottom: 10,
    },
    albumCover: {
        width: 75,
        height: 75
    },
    albumInfo: {

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
    }
})