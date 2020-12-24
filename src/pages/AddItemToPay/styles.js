import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 20,
    },
    top:{
        flexDirection: "row"
    },
    itemName:{
        flexGrow: 1,
        textAlignVertical: 'center',
    },
    value:{
        textAlign: 'center',
        borderColor: '#DDD',
        borderStyle: 'solid',
        borderWidth: 1,
        lineHeight: 30,
        paddingHorizontal: 10
    },
    bottom:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        marginVertical: 20
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
    },
    inputTam:{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#DDD',
        width: 24,
        height: 24,
        lineHeight: 25,
        textAlign: 'center',
        marginHorizontal: 5
    },
    buttons: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-evenly'
    },
    button:{
        borderRadius: 8,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIcon:{
        height: 32,
        width: 32
    },
    add:{
        backgroundColor: '#0f0'
    },
    cancel:{
        backgroundColor: '#f00'
    }
});