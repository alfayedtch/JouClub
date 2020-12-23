import React from 'react'
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native' 


class Joueuritem extends React.Component {
    _edit(){
        console.log("modification")
    }

    _Supprimer(){
        console.log("suppression")
    }
    render(){
        //const id = this.props.navigation.state.params.id;
        return(
            <TouchableOpacity style= {styles.main}>
                <View style={styles.image}><Text style = {{justifyContent:'center'}}>Photo</Text></View>
                <View style={styles.text}>
                        <Text style={styles.title}>Nom joueur</Text>
                        <Text style={styles.description}>Description joueur</Text>
                </View>
                <View style={styles.action}>
                    <Button title="M" color="grey" onPress={()=>this._edit()}></Button>
                    <Button title="S" color="red" onPress={()=>this._Supprimer()}></Button>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main : {
        height : 70,
        flex: 2,
        flexDirection : "row",
        margin : 5
    },
    image : {
        flex : 2,
        justifyContent: "center",
        backgroundColor : 'grey',
        margin : 5,
            
    },
    text : {
        flex:5,
        flexDirection: "column"
    },
    action : {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
    },
    title : {
        flex:2,
        fontWeight : 'bold',
        fontSize : 16
    },
    description : {
        flex : 2,
        fontStyle : 'italic',
        color : '#666666',
        fontSize : 12
    }
})


export default Joueuritem