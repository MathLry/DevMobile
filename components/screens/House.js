

import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import {Button,Input,NativeBaseProvider} from 'native-base';
import Swipeout from 'react-native-swipeout';

export default function App({navigation}) {
    const [currentPlace, setCurrentPlace] = useState("");
    const [house, setHouse] = useState([
        {text : "Salon", key:1},
        {text : "Cuisine", key:2},
        {text : "Salle à manger", key:3},
    ]);
    
    const addPlace = () => {
        
        setHouse([...house,{text : currentPlace, key: house.length+1}])
        setCurrentPlace("");
        setCurrentInput("");
       
    }

    const addButton = <Button onPress={addPlace}>+</Button>;

    const viewRoom = (todo) =>{
        navigation.navigate("Room", {todo});
    }

    return (
        
        <NativeBaseProvider>
            <View style={styles.container}>                   
            <Input 
            placeholder="Ajouter une piece"
            value={currentPlace} 
            onChangeText={(text) => setCurrentPlace(text)}
            rightElement={addButton}
            >
            </Input>
            <View style={styles.content}>
                    <View style={styles.list}>
                        <FlatList
                            data={house}
                            renderItem={({item}) => (
                                <HouseItem item={item} 
                                onViewRoom={() => {viewRoom(item)}}
                                text={item.text}  
                                onToggle={() => {
                                    setHouse([...house]);
                                }}/>
                            )}
                        />

                    </View>

                </View>
            </View>
            </NativeBaseProvider>
    )}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        paddingTop: 40,
        paddingHorizontal: 20,   

    },

    content: {
        padding: 40,
    },

    list: {
        marginTop: 20,
    },
})