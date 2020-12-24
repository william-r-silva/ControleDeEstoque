import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    back:{
        height: 26,
        width: 30,
    },
    infos:{
        textAlign: 'center',
        marginBottom: 20,
    },
    lineOne:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input:{
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#DDD',
        flexGrow: 7,
        marginRight: 20,
        paddingHorizontal: 10 
    },
    camera:{
        height: 32,
        width: 32
    },
    lineTwo:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    description:{
        textAlign: 'center',
    },
    dataValue:{
        flexGrow: 4
    },
    inputValue:{
        marginLeft: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#DDD',
        height: 24,
        lineHeight: 25,
        textAlign: 'center'
    },
    trash:{
        marginTop: 40,
        alignSelf: 'center',
        width: 64,
        height: 64,
    }
});