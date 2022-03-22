import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import {Button,Input} from 'native-base';

export default function App() {
    const [currentPlace, setCurrentPlace] = useState("");
    const [house, setHouse] = useState([
        {text : "Salon", key:1},
        {text : "Cuisine", key:2},
        {text : "Salle à manger", key:3},
    ]);
    
    const addPlace = () => {
        
        setHouse([...house,{text : currentPlace, key: house.length+1}])
        setCurrentPlace("");
       
    }
    const addButton = <Button onPress={addPlace}>+</Button>;
    return (
        <ScrollView>
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
                                <HouseItem item={item} />

                            )}
                        />

                    </View>

                </View>
            </View>

        </ScrollView>
    );
}

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
});