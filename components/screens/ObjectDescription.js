

import { View, TextInput,Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import {Button,Input,NativeBaseProvider} from 'native-base';


export default function App({navigation}) {
    const [currentPlace, setCurrentPlace] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [description, setDescription] = useState([ 
        {text : "à gauche", key:'1'},
    ]);

    const onPressHandler = ()=>{
        setSubmitted(!submitted);

    }

    const addPlace = () => {
        setDescription([...description,{text : currentPlace, key: description.length+1}])
        setCurrentPlace("");
       
    }

    const addButton = <Button onPress={addPlace}>+</Button>;

 
    return (

        <NativeBaseProvider>

            <View style={styles.container}>
                <Input
                       multiline
                       style={styles.input}
                       placeholder='Ajouter une description'
                       onChangeText={(text)=> setCurrentPlace (text)}
                       rightElement={addButton}
                       />
                    <View style={styles.description}>
                    <FlatList
                            data={description}
                            renderItem={({item}) => (
                                <HouseItem item={item}
                                text={item.text}  
                                onToggle={() => {
                                    setDescription([...description]);
                                }}/>
                            )}
                        />
                       
                    </View>
 

            </View>
            </NativeBaseProvider>
            
        
    )}

    const styles = StyleSheet.create({

        container : {
            flex: 1,
            backgroundColor: '#fff',
            alignItems:'center',
            justifyContent:'center',
        },

        input:{
           borderWidth: 1,
           borderColor: 'blue', 
           padding: 8,
           margin:10,
           width: 200,
           backgroundColor: 'white',
           

        },

        description:{
            flex:1,
            padding: 8,
            marginTop: 200,
            width: 200,
            backgroundColor: 'white',

        }
    })