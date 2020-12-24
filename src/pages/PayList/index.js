import React, { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Alert, Picker } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ListItem from '../../components/ListItem';

import itemService from '../../service/item';

import styles from './styles';

import PlusGrey from '../../assets/PlusGrey.png';
import Back from '../../assets/Back.png';
import Money from '../../assets/Money.png';

export default function PayList(){
    
    const listFake = {id: 1, name: '', tam_p: 0, tam_m: 0, tam_g: 0, tam_gg: 0, tam_egg: 0, total_items: 0, value: 0};
    const navigation = useNavigation();
    
    const [stockList, setStockList] = useState([]);
    const [itemsToPay, setItemsToPay] = useState([]);
    const [itemToAdd, setItemToAdd] = useState({});
    const [price, setPrice] = useState(0);

    function navigateBack(){
        navigation.goBack();
    }
    
    async function loadStockList(){
        await setStockList(await itemService.findAll())
    }

    async function loadList(){

    }
    
    function navigateToAddItemToPay(item){
        if(item){
            navigation.navigate('AddItemToPay', { item });  
        }else{
            alert('Selecione um produto valido.')
        }
      }

    function checkList(){
        if(!itemsToPay.includes(itemToAdd)){

            let tempItem = itemToAdd;

            tempItem.tam_p = 0;
            tempItem.tam_m = 0;
            tempItem.tam_g = 0;
            tempItem.tam_gg = 0;
            tempItem.tam_egg = 0;

            navigateToAddItemToPay(tempItem);

        }else{
            Alert.alert(
                "Item duplicado",
                'Este item já está na sua lista',
                [
                  { text: "OK"}
                ],
                { cancelable: false }
              );
        }
    }

    useEffect(() => {
        loadStockList();
    }, [])

    useFocusEffect(() => {
        loadList();
    });

    return(
        <View style={styles.pay_list_container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button} onPress={navigateBack}>
                    <Image style={styles.back} source={Back}/>
                </TouchableOpacity>
                <Text style={styles.title}>Lista de Compras</Text>
                <View style={styles.addItem}>
                    <Picker
                    style={styles.addItemText}
                    selectedValue={itemToAdd.name? itemToAdd.name: ''}
                    onValueChange={(itemValue, itemIndex) => setItemToAdd(stockList[itemIndex-1])} > 
                        <Picker.Item setVisible={false} label={'Selecione um produto'} value={''} />
                        { stockList.map((item) => {
                                return <Picker.Item key={item.id} label={item.name} value={item.name} />
                            })
                        }
                    </Picker>  
                    <TouchableOpacity style={styles.addButton} onPress={ checkList }>
                        <Image style={styles.addItemImg} source={PlusGrey}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
            style={styles.itemsPayList}
            data={itemsToPay}
            keyExtractor={ item => {String(item.id)}}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity key = {item.id} style={styles.item} onPress = {() => { navigateToAddItemToPay(item) }}>
                    <ListItem item = { item } />
                </TouchableOpacity>
            )}/>
            <View style={styles.payment}>
                <Text style={styles.values}>Valor:</Text>
                <Text style={styles.price}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(price)}</Text>
                <TouchableOpacity>
                    <Image style={styles.money} source={Money}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}