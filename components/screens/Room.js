import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';

export default ({navigation}) => {
    const [house, setHouse] = useState([
        {text : "Tirroire", key:'1'},
    ]);

    const viewRoom = (todo) =>{
        navigation.navigate("Room", {todo});
    }


    return (
            <View style={styles.container}>
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