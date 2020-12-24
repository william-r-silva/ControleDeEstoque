import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';

import styles_modal from './styles';

import Check from '../../assets/Check.png';
import Cancel from '../../assets/Cancel.png';

import itemService from '../../service/item';
import itemToPayService from '../../service/itemToPay';

export default function AddItemToPay (){

    const navigation = useNavigation();
    const route = useRoute();

    const [item, setItem] = useState(route.params.item);

    const [tamP, setTamP] = useState(String(item.tam_p));
    const [tamM, setTamM] = useState(String(item.tam_m));
    const [tamG, setTamG] = useState(String(item.tam_g));
    const [tamGG, setTamGG] = useState(String(item.tam_gg));
    const [tamEGG, setTamEGG] = useState(String(item.tam_egg));
    
    const [itemStockTam_p, setItemStockTamP] = useState('0');
    const [itemStockTam_m, setItemStockTamM] = useState('0');
    const [itemStockTam_g, setItemStockTamG] = useState('0');
    const [itemStockTam_gg, setItemStockTamGG] = useState('0');
    const [itemStockTam_egg, setItemStockTamEGG] = useState('0');

    function navigateBack(){
        navigation.goBack();
    }

    async function buscaDados(){
        const ItemStock = await itemService.findById(item.id);

        setItemStockTamP(await ItemStock.tam_p);
        setItemStockTamM(await ItemStock.tam_m);
        setItemStockTamG(await ItemStock.tam_g);
        setItemStockTamGG(await ItemStock.tam_gg);
        setItemStockTamEGG(await ItemStock.tam_egg);
    }

    function addItem(){
        //Rever
        if(
            tamP   >  itemStockTam_p    || tamP   < 0  ||
            tamM   >  itemStockTam_m    || tamM   < 0  ||
            tamG   >  itemStockTam_g    || tamG   < 0  ||
            tamGG  >  itemStockTam_gg   || tamGG  < 0  ||
            tamEGG >  itemStockTam_egg  || tamEGG < 0
        ){
            alert('Estoque a baixo do desejado')
            return
        }

        const sum1 = (Number(item.tam_p) + Number(item.tam_m) + Number(item.tam_g) + Number(item.tam_gg) + Number(item.tam_egg)) * Number(item.value);
        const sum2 = (Number(tamP) + Number(tamM) + Number(tamG) + Number(tamGG) + Number(tamEGG)) * Number(item.value);
        
        const sum = sum2 - sum1;

        let ItemStock = item;
        ItemStock.tam_p = tamP;
        ItemStock.tam_m = tamM;
        ItemStock.tam_g = tamG;
        ItemStock.tam_gg = tamGG;
        ItemStock.tam_egg = tamEGG;

        if(!itemToPayService.isIn(ItemStock)){

        }else{
            
        }
    }

    useState( () => {
        buscaDados()
    }, [item])

    return (
        <View style = {styles_modal.container}>
            <View style={styles_modal.top}>
                <Text style={styles_modal.itemName}>{item.name}</Text>
                <Text style={styles_modal.value}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)}</Text>
            </View>
            <View style={styles_modal.bottom}>
                <View style={styles_modal.sizeData}>
                    <Text style={styles_modal.sizeDescription}>{itemStockTam_p}</Text>
                    <TextInput value={tamP} style={styles_modal.inputTam} placeholder={tamP} onChangeText={( text ) => setTamP(text)}/>
                    <Text style={styles_modal.sizeDescription}>P</Text>
                </View>
                <View style={styles_modal.sizeData}>
                    <Text style={styles_modal.sizeDescription}>{String(itemStockTam_m)}</Text>
                    <TextInput value={tamM} style={styles_modal.inputTam} placeholder={tamM} onChangeText={( text ) => setTamM(text)}/> 
                    <Text style={styles_modal.sizeDescription}>M</Text>
                </View>
                <View style={styles_modal.sizeData}>
                    <Text style={styles_modal.sizeDescription}>{String(itemStockTam_g)}</Text>
                    <TextInput value={tamG} style={styles_modal.inputTam} placeholder={tamG} onChangeText={( text ) => setTamG(text)}/>
                    <Text style={styles_modal.sizeDescription}>G</Text>
                </View>
                <View style={styles_modal.sizeData}>
                    <Text style={styles_modal.sizeDescription}>{String(itemStockTam_gg)}</Text>
                    <TextInput value={tamGG} style={styles_modal.inputTam} placeholder={tamGG} onChangeText={( text ) => setTamGG(text)}/>
                    <Text style={styles_modal.sizeDescription}>GG</Text>
                </View>
                <View style={styles_modal.sizeData}>
                    <Text style={styles_modal.sizeDescription}>{String(itemStockTam_egg)}</Text>
                    <TextInput value={tamEGG} style={styles_modal.inputTam} placeholder={tamEGG} onChangeText={( text ) => setTamEGG(text)}/>
                    <Text style={styles_modal.sizeDescription}>EGG</Text>
                </View>
            </View>
            <View style = { styles_modal.buttons }>
                <TouchableOpacity style = {[ styles_modal.cancel, styles_modal.button ]} onPress = {() => navigateBack() }>
                    <Image style = {styles_modal.buttonIcon} source = {Cancel}/>
                </TouchableOpacity>
                <TouchableOpacity style = {[ styles_modal.add, styles_modal.button ]} >
                    <Image style = {styles_modal.buttonIcon} source = {Check}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}