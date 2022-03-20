import { StyleSheet } from "react-native";

export const checkoutStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#e5e5e0'
    },
    headerContainer: {
        backgroundColor: '#fff',
        paddingTop: 33,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerReturnBtn: {

    },
    headerReturnBtnIcon: {
        color: '#757575',
        padding: 15
    },
    headerText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22,
        padding: 10,
    },
    midContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: '10%'
    },
    midIcon: {
        color: '#2288dc',
        marginBottom: '2%'
    },
    midContainerValue: {
        color: '#82b440',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: '5%'
    },
    midContainerText: {
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 22,
        margin: 20
    },
    inputContainer: {
        alignItems: 'center',
    },
    firstLine: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#757575',
    },
    inputCardNumber: {
        fontSize: 22,
        padding: 12
    },
    secondLine: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#757575',
        marginTop: '4%'
    },
    inputName: {
        fontSize: 22,
        padding: 12
    },
    thirdLine: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    inputNum: {
        borderBottomWidth: 1,
        borderColor: '#757575',
        marginTop: '4%',
        fontSize: 22,
        padding: 12
    },
    paymentContainer: {
        width: '100%',
        alignItems: 'center'
    },
    paymentBtn: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#2288dc',
        padding: 12,
    },
    paymentText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    }
})


//82b440 - green
//2288dc - blue