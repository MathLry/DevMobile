import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';

export default function SearchItems() {

  const data = [
    {key: '1', name: "montre"},
    {key: '2', name: "stylo"},
    {key: '3', name: "veste"},
    {key: '4', name: "chaise"},
    {key: '5', name: "commode"},
    {key: '6', name: "chaussure"},
  ];

  const [dataFromState, setData] = useState(data);

  const searchName = (input) => {
    let data = dataFromState;
    let searchData = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setData(searchData)
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput style= {styles.searchTitle}
          placeholder="Search Items's Name"
          onChangeText={(input)=>{
            searchName(input)
          }}
        />
      </View>

      <FlatList 
        data={dataFromState}
        renderItem= {({item}) => (
          <View>
            <Text style= {styles.items}>
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor= {(item, key) => key.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
    marginTop: "20px",
  },
  
  searchTitle: {
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    borderColor: 'royalblue',
    borderWidth: 1,
    borderRadius: "10px",
    marginBottom: "20px",
  },
  
  items: {
    fontSize: 20,
  },
});