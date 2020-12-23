import React from 'react'
import {View, Button, StyleSheet,TextInput} from 'react-native' 


class AjoutClub extends React.Component {
    _save () {
        console.log("enregistré")
    }

    render(){
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.inp} placeholder="Nom du club"/>
                <Button title="Enregistrer"  onPress={()=>this._save()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 1,
        padding: 20,
        flex:1
    },

    inp:{
       
        borderWidth : 1,
        marginBottom: 5,
        padding: 5,
        height: 40
    }
})

export default AjoutClub