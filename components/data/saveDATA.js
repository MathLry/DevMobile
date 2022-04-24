import {useState} from "react";
import {Button, Input} from "native-base";
import { View, ScrollView} from 'react-native';

import * as FileSystem from 'expo-file-system';

export default function Save() {

    const fileURI = FileSystem.documentDirectory + "../data/save.json";
    const [currentObjet, setCurrentObjet] = useState("");
    let [objets, setObjet] = useState([]);
    let getItem;

    async function SaveData(){

        try {
            const payloadJson = await FileSystem.readAsStringAsync(fileURI)
            const payload = JSON.parse(payloadJson)
            const updatedPayload = { ...payload, ...updates }
            await FileSystem.writeAsStringAsync(fileURI, JSON.stringify(updatedPayload))
        } catch (e) {
            console.error(e);
        }
        if (await FileSystem.readAsStringAsync(fileURI)== undefined){
            [objets, setObjet] = useState([]);
            const payloadJson = await FileSystem.readAsStringAsync(fileURI)
            const payload = JSON.parse(payloadJson)
            const updatedPayload = { ...payload, ...updates }
            const write = await FileSystem.writeAsStringAsync(fileURI, JSON.stringify(updatedPayload))
            return write;
        }
        else {
            getItem = JSON.parse(await FileSystem.readAsStringAsync(fileURI));
            [objets, setObjet] = useState(getItem);
            return getItem;
        }
    }

    const addObjet = () => {
        setObjet([...objets,{text : currentObjet, description : ""}])
        setCurrentObjet("");
        SaveData(getItem)
    }

    const viewDetails = (todo) =>{
        navigation.navigate("Details", {todo});
    }

    const addButton = <Button onPress={addObjet}>+</Button>;

    return (
        <View style={{flex : 1, padding : 5}}>
        <ScrollView style={styles.expand}>
        {objets.map((todo,index) => (
            <Test 
            onViewDetails={() => {viewDetails(todo)}}
            text={todo.text} 
            done={todo.done} 
            key={index}
            onToggle={() => {
                todo.done = !todo.done;
                setObjet([...objets]);
                rightElement={addButton};
            }}/>
            ))}
        </ScrollView>
        <View style={styles.form}>
            <Input size="full" value={currentObjet} onChangeText={(text) => setCurrentObjet(text)} rightElement={addButton}></Input>
        </View>
    </View>
    );
}
  
const styles = {
    expand : {
        flex : 1
    },
    form : {
        marginBottom : 20,
        flexDirection : "row"
    },
};