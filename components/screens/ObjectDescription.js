

import { View, TextInput,Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import {Button,Input,NativeBaseProvider} from 'native-base';


export default function App({navigation}) {
    const [description, setDescription] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [currentPlace, setCurrentPlace] = useState([
    ]);

    const onPressHandler = ()=>{
        setSubmitted(!submitted);

    }

    const addPlace = () => {
        setDescription([...description,{text : currentPlace, key: description.length+1}])
        setCurrentPlace("");
       
    }

    const addButton = <Button title={submitted? 'clear': 'submit' } 
    onPress={onPressHandler}>+</Button>;

 
    return (

        <NativeBaseProvider>

            <View style={styles.container}>
                    <View style={styles.description}>
                       <Input
                       multiline
                       style={styles.input}
                       placeholder='Ajouter une description'
                       onChangeText={(text)=> setCurrentPlace (text)}
                       rightElement={addButton}
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