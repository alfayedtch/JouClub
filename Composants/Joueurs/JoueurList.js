import React from 'react';
import {StyleSheet, View,Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Joueuritem from './Joueuritem'

class JoueurList extends React.Component{

    //fonction de Ajout de club
    _AjoutJoueur() {
        this.props.navigation.navigate('AjoutJoueur')
    };

    //fonction de navigation
    _DisplayPlayersDetail = (id) => {
        console.log("detail du joueur")
    };

    render(){
        return (
            <View style = {styles.container}>
                <Button title="Ajouter un nouveau joueur" onPress={()=>this._AjoutJoueur()}></Button>
                <FlatList 
                    data = { [{key:'a'}, {key:'b'}] }
                   // keyExtractor = {(item) =>item.id.toString() }
                    renderItem = {({item}) => <Joueuritem />}
                />
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

export default JoueurList;

