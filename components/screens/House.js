import { View, ScrollView, StyleSheet, FlatList} from 'react-native';
import { useState  } from 'react';
import HouseItem from '../houseItem';

export default function App() {
    const [house, setHouse] = useState([
        {name : "Salon", key:'1'},
        {name : "Cuisine", key:'2'},
        {name : "Salle à manger", key:'3'},
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