import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    plus:{
        height: 10,
        width: 10,
        marginTop: -7,
        marginLeft: -7,
        marginBottom: 10,
    },
    itemName:{
        flexGrow: 1,
        textAlignVertical: 'center',
        marginBottom: 15
    },
    itemLeftSide:{
        flexGrow: 8,
    },
    itemRightSide:{
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