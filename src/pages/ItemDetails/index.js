import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

import camera from '../../assets/Camera.png';
import Back from '../../assets/Back.png';
import Trash from '../../assets/Trash.png';

import itemService from '../../service/item';

export default function Item(){
  const navigation = useNavigation();
  const route = useRoute();

  const item = route.params.item;

  const [name, setName] = useState(item.name !== 'Nome do produto' ? String(item.name) : '');
  const [tamP, setTamP] = useState(item.name != 'Nome do produto' ? String(item.tam_p) : '');
  const [tamM, setTamM] = useState(item.name != 'Nome do produto' ? String(item.tam_m) : '');
  const [tamG, setTamG] = useState(item.name != 'Nome do produto' ? String(item.tam_g) : '');
  const [tamGG, setTamGG] = useState(item.name != 'Nome do produto' ? String(item.tam_gg) : '');
  const [tamEGG, setTamEGG] = useState(item.name != 'Nome do produto' ? String(item.tam_egg) : '');
  const [value, setValue] = useState(item.name != 'Nome do produto' ? String(item.value) : '');

  function navigateBack(){
    navigation.goBack();
  }

  async function save(){
        item.name = name ? name: item.name
        item.tam_p = Number(tamP ? tamP: item.tam_p);
        item.tam_m = Number(tamM ? tamM: item.tam_m); 
        item.tam_g = Number(tamG ? tamG: item.tam_g); 
        item.tam_gg = Number(tamGG ? tamGG: item.tam_gg);
        item.tam_egg = Number(tamEGG ? tamEGG: item.tam_egg); 
        item.value = String(value ? value: item.value).replace(',','.');

    if(item.id){
      itemService.updateById(item);
    }else{
      itemService.addData(item);
    }
    navigation.navigate('Home');
  }

  function deletItem({id}){
    Alert.alert(
      "Excluir item",
      'Tem certeza que desejas excluir este item?',
      [
        {
          text: "Cancel"
        },
        { text: "OK", onPress: () => {itemService.deleteById(id);navigation.navigate('Home', { name: item.name })} }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonSalvar} onPress={navigateBack}>
          <Image style={styles.back} source={Back}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSalvar} onPress={save}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.infos}>Informações:</Text>
      <View style={styles.lineOne}>
        <TextInput value={name} style={styles.input} placeholder={item.name} onChangeText={( text ) => setName(text)}/>
        <TouchableOpacity style={styles.buttonCamera}>
          <Image style={styles.camera} source={camera}/>
        </TouchableOpacity>
      </View>
      <View style={styles.lineTwo}>
        <View style={styles.sizeData}>
          <TextInput value={tamP} style={styles.inputTam} placeholder={String(item.tam_p)} onChangeText={( text ) => setTamP(text)}/>
          <Text style={styles.description}>P</Text>
        </View>
        <View style={styles.sizeData}>
          <TextInput value={tamM} style={styles.inputTam} placeholder={String(item.tam_m)} onChangeText={( text ) => setTamM(text)}/>
          <Text style={styles.description}>M</Text>
        </View>
        <View style={styles.sizeData}>
          <TextInput value={tamG} style={styles.inputTam} placeholder={String(item.tam_g)} onChangeText={( text ) => setTamG(text)}/>
          <Text style={styles.description}>G</Text>
        </View>
        <View style={styles.sizeData}>
          <TextInput value={tamGG} style={styles.inputTam} placeholder={String(item.tam_gg)} onChangeText={( text ) => setTamGG(text)}/>
          <Text style={styles.description}>GG</Text>
        </View>
        <View style={styles.sizeData}>
          <TextInput value={tamEGG} style={styles.inputTam} placeholder={String(item.tam_egg)} onChangeText={( text ) => setTamEGG(text)}/>
          <Text style={styles.description}>EGG</Text>
        </View>
        <View style={styles.dataValue}>
          <TextInput value={value} style={styles.inputValue} placeholder={Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.value)} onChangeText={( text ) => setValue(text)}/>
          <Text style={styles.description}>Valor</Text>
        </View>
      </View>
      { item.id &&
        <TouchableOpacity onPress={() => deletItem(item)}>
          <Image style={styles.trash} source={Trash}/>
        </TouchableOpacity>
      }
    </View>);
};