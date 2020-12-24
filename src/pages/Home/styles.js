import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        marginBottom: 20,
    },
    dados: {
        fontSize: 16,
        textAlign: 'center',
    },
    search:{
        backgroundColor: null,
        padding: 0,
        marginHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
    },
    inputSearch:{
        backgroundColor: null,
    },
    itemsList:{
        marginTop: 20,
        paddingHorizontal: 10
    },
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    buttons:{
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
    button:{
        height: 45,
        width: 45
    }
});