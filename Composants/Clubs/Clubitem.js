import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Button} from 'react-native' 


class Clubitem extends React.Component {
    _edit(){
        console.log("modification")
    }

    _Supprimer(){
        console.log("suppression")
    }
    render(){
        const {Club, DisplayPlayersForClub} = this.props
       // const DisplayPlayersForClub = this.props.DisplayPlayersForClub
        return(
            <TouchableOpacity style= {styles.main} onPress= {()=> DisplayPlayersForClub(Club.id)}>
                
                <View style={styles.image}><Text >Image</Text></View>
                <View style={styles.text}>
                        <Text style={styles.title}>{Club.Nom}</Text>
                        <Text style={styles.description}>{Club.Description}</Text>
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
        height : 120,
        flex: 2,
        flexDirection : "row"
    },
    image : {
        flex : 1,
        justifyContent: "center",
        backgroundColor : 'grey',
        margin : 5,
            
    },
    text : {
        flex:2,
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
        fontSize : 18
    },
    description : {
        flex : 4,
        fontStyle : 'italic',
        color : '#666666',
        fontSize : 12
    }
})


export default Clubitem