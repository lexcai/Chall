// Components/Search.js

import data from '../Helpers/bricoData'
import BricoItem from './BricoItem'
import React from 'react'


import { FlatList, StyleSheet, View, TextInput, Button } from 'react-native'



class Search extends React.Component {
  render() {
    return (
        <View style={styles.main_container}>
        <View style={styles.header}>
        <TextInput style={styles.texteBarre}placeholder="Titre de l'annonce"/>
            </View>
        <Button title='Rechercher' onPress={() => {}}/>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <BricoItem brico={item}/>}
            />
      </View>
      
    )
  }
}

const styles = StyleSheet.create( {
    main_container: {
        marginTop: 20,
        flex: 1
    },
    header:{
        flex:1,
        flexDirection: 'row',
        height: 50,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 50
      },
      texteBarre:{
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5
      },
  })

export default Search