import { View, ScrollView, Text, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';
import * as FileSystem from 'expo-file-system';

export default function App() {
    const [house, setHouse] = useState([
        {text : "Salon", key:'1'},
        {text : "Cuisine", key:'2'},
        {text : "Salle à manger", key:'3'},
    ]);

    return (
        <ScrollView>
            <View style={styles.container}>
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
        backgroundColor: '#fff',
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