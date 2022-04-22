

import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import {Button,Input,NativeBaseProvider} from 'native-base';


export default function App({navigation}) {
    const [currentPlace, setCurrentPlace] = useState("");
    const [furniture, setFurniture] = useState([
        {text : "clé", key:1},
    ]);
    
    const addPlace = () => {
        
        setFurniture([...furniture,{text : currentPlace, key: furniture.length+1}])
        setCurrentPlace("");
       
    }

    const addButton = <Button onPress={addPlace}>+</Button>;

    const viewRoom = (todo) =>{
        navigation.navigate("Furniture", {todo});
    }


    return (
        
        <NativeBaseProvider>
            <View style={styles.container}>
            <Input 
            placeholder="Ajouter un objet"
            value={currentPlace} 
            onChangeText={(text) => setCurrentPlace(text)}
            rightElement={addButton}
            >
            </Input>
            <View style={styles.content}>
                    <View style={styles.list}>
                        <FlatList
                            data={furniture}
                            renderItem={({item}) => (
                                <HouseItem item={item} 
                                onViewFurniture={() => {viewFurniture(item)}}
                                text={item.text}  
                                onToggle={() => {
                                    setFurniture([...furniture]);
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