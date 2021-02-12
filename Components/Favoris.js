import data from '../Helpers/bricoData'
import BricoItem from './BricoItem'
import React from 'react'


import { FlatList, StyleSheet, View, TextInput, Button } from 'react-native'



class Favoris extends React.Component {
  render() {
    return (
        <View>
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
    }})

export default Favoris