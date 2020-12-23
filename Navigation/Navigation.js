import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Accueil from '../Composants/Accueil'
import JoueurList from'../Composants/Joueurs/JoueurList'
import AjoutClub from '../Composants/Clubs/AjoutClub'
import AjoutJoueur from '../Composants/Joueurs/AjoutJoueur'

const SearchStackNavigator = createStackNavigator({
    Accueil : {
        screen: Accueil,
        navigationOptions: {
                title : 'Accueil'
        }
    },
    JoueurList:{
        screen: JoueurList,
        navigationOptions: {
            title : 'Liste des joueurs'
        }
    },
    AjoutClub :{
        screen: AjoutClub,
        navigationOptions: {
            title : 'Ajout de club'
        }
    },
    AjoutJoueur :{
        screen: AjoutJoueur,
        navigationOptions: {
            title : 'Ajout de Joueurs'
        }
    }
});
const AppContainer = createAppContainer(SearchStackNavigator);

export default AppContainer;