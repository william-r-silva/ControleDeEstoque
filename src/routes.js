import React from  'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
 
import Home from './pages/Home';
import Item from './pages/ItemDetails';
import PayList from './pages/PayList';
import AddItemToPay from './pages/AddItemToPay';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Item" component={Item}/>
                <AppStack.Screen name="PayList" component={PayList}/>
                <AppStack.Screen name="AddItemToPay" component={AddItemToPay}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}