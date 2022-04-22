

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

 
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Please write your name:
            </Text>
            <TextInput
                style={styles.input}
                placeholder='e.g. John'
                onChangeText={(value) => SetName(value)}
            />
            { <Button
                title={submitted ? 'Clear' : 'Submit'}
                onPress={onPressHandler}
            /> }
        </View>
  );
};

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