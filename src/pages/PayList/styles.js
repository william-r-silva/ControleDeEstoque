import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    pay_list_container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        paddingHorizontal: 10,
    },
    button:{
        position: "absolute",
        left: 24,
        zIndex: 1
    },
    back:{
        height: 26,
        width: 30,
    },
    title:{
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 30
    },
    addItem:{
        borderColor: '#DDD',
        borderWidth: 1,
        borderStyle: 'solid',

        flexDirection: 'row',

        marginTop: 10
    },
    addItemText:{
        flexGrow: 1,
        paddingHorizontal: 10,
        fontSize: 16
    },
    addButton:{
        borderColor: '#DDD',
        borderLeftWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        justifyContent: 'center'
    },
    addItemImg:{
        height: 24,
        width: 24,

        alignSelf: 'center',
    },
    dados: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemsPayList:{
        marginTop: 10,
        paddingHorizontal: 10
    },
    itemToPay:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    plus:{
        height: 10,
        width: 10,
        marginTop: -7,
        marginLeft: -7,
        marginBottom: 10,
    },
    money:{
        height: 45,
        width: 45,
    },
    itemName:{
        flexGrow: 1,
        textAlignVertical: 'center',
        marginBottom: 15
    },
    payment:{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: 'space-around',
        backgroundColor: '#EEE',
        borderRadius: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DDD',
        paddingVertical: 20,
    },
    values:{
        lineHeight: 47,
        fontSize: 18,
    },
    price:{
        lineHeight: 47,
        fontWeight: 'bold',
        fontSize: 22,
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    itemToPayLeftSide:{
        flexGrow: 8,
    },
    itemToPayRightSide:{
        flexGrow: 2,
    },
    value:{
        textAlign: 'center',
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        lineHeight: 30
    },
    itemSizes:{
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    size:{
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 24,
        height: 24,
        lineHeight: 25,
        textAlign: 'center'
    },
    sizeDescription:{
        textAlign: 'center',
        lineHeight: 20
    }
});