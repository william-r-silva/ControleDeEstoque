import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import Plus from '../../assets/Plus.png'

export default function ListItem({ item }){

    return(
        <>
            <View style={styles.itemLeftSide}>
                <Image style={styles.plus} source={Plus}/>
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View style={styles.itemRightSide}>
                <Text style={styles.value}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</Text>
                <View style={styles.itemSizes}>
                <View style={styles.sizeData}>
                    <Text style={styles.size}>{item.tam_p}</Text>
                    <Text style={styles.sizeDescription}>P</Text>
                </View>
                <View style={styles.sizeData}>
                    <Text style={styles.size}>{item.tam_m}</Text>
                    <Text style={styles.sizeDescription}>M</Text>
                </View>
                <View style={styles.sizeData}>
                    <Text style={styles.size}>{item.tam_g}</Text>
                    <Text style={styles.sizeDescription}>G</Text>
                </View>
                <View style={styles.sizeData}>
                    <Text style={styles.size}>{item.tam_gg}</Text>
                    <Text style={styles.sizeDescription}>GG</Text>
                </View>
                <View style={styles.sizeData}>
                    <Text style={styles.size}>{item.tam_egg}</Text>
                    <Text style={styles.sizeDescription}>EGG</Text>
                </View>
                </View>
            </View>
        </>
    );
}
        