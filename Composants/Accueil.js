import React from 'react';
import {StyleSheet, View,Button,TextInput} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Clubitem from './Clubs/Clubitem';
import Club from '../BD/Club'
import * as SQLite from 'expo-sqlite';



class Accueil extends React.Component{

    constructor(props){
        const db = SQLite.openDatabase("database.db");
        super(props)
        this.state = { 
            films : [] }
    }

    //Initialisation de la base de données
    initializeDatabase(): void {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists Club (club_id integer primary key autoincrement not null,name text not null);create table if not exists Joueur (joueur_id integer primary key autoincrement not null,name text not null,club_id integer fpreign key references Club)"
            );
        }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK + ") }
        );
    }

    //fonction de Ajout de club
    _AjouClub() {
        this.props.navigation.navigate('AjoutClub')
    };

    //fonction de navigation
    _DisplayPlayersForClub = (id) => {
        this.props.navigation.navigate('JoueurList', {id : id} )
    };

    render(){
        return (
            <View style = {styles.container}>
                <Button title="Ajouter " onPress={()=>this.initializeDatabase()}></Button>
                <Button title="Ajouter un nouveau club" onPress={()=>this._AjouClub()}></Button>
                <FlatList 
                    data = { Club }
                    keyExtractor = {(item) =>item.id.toString() }
                    renderItem = {({item}) => <Clubitem Club ={item} DisplayPlayersForClub={this._DisplayPlayersForClub} />}
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

export default Accueil;

