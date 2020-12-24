import React, { useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
// import { SearchBar } from 'react-native-elements';

import ListItem from '../../components/ListItem';
import ItemService from '../../service/item';

import styles from './styles';

// import Invoice from '../../assets/Invoice.png'
import Add from '../../assets/Add.png'
// import Money from '../../assets/Money.png'

export default function Home(){
  const navigation = useNavigation();
  
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(0);
  const [items, setItems] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  
  const listFake = {name: 'Nome do produto', tam_p: 0, tam_m: 0, tam_g: 0, tam_gg: 0, tam_egg: 0, total_items: 0, value: 0};

  // function navigateToTikets(){
  //   navigation.navigate('Tikets');  
  // }
  function navigateToItem(item){
    navigation.navigate('Item', { item });  
  }
  // function navigateToPayList(){
  //   navigation.navigate('PayList');  
  // }

  // function updateSearch(search){
  //   setSearch(search);
  // };

  async function findItems(){
    return await setItemsList(await ItemService.findAll());
  }

  async function countTotals(){
    const {products, items} = await ItemService.totals();
    
    setProducts(products);
    setItems(items);
  }

  async function loadItems(){
    setRefresh(true);
    await findItems();
    setRefresh(false);
  }

  useFocusEffect(() => {
    findItems();
    countTotals();
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dados}>{products} Tipos de produtos</Text>
        <Text style={styles.dados}>{items} Itens no estoque</Text>
      </View>
      {/* <SearchBar
        placeholder="Buscar peça"
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
        containerStyle={styles.search}
        inputContainerStyle={styles.inputSearch}
      /> */}
      <FlatList
        style={styles.itemsList}
        data={itemsList}
        keyExtractor={ item => String(item.id)}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={loadItems}
        renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => {navigateToItem(item)}}>
            <ListItem item = { item } />
        </TouchableOpacity>)}/>
      <View style={styles.buttons}>
        {/* <TouchableOpacity onPress={() => navigateToTikets()}> 
          <Image style={styles.button} source={Invoice}/>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigateToItem(listFake)}> 
          <Image style={styles.button} source={Add}/>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigateToPayList()}> 
          <Image style={styles.button} source={Money}/>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}