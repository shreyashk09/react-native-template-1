import React from 'react';
import { View, StatusBar, NavigationContainer } from 'react-native';


import { Image, Dimensions} from 'react-native';
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import theme from '../theme';
const { height, width } = Dimensions.get('window');
import Landing from './Landing';
import Login from './Login';
import Menu from './Menu';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const AppNavigator = createStackNavigator(  
    {  
        GetStarted: Landing,  
        Login: Login,  
        Menu: Menu
    },  
    {  
        initialRouteName: "GetStarted",
        headerMode: 'none',
        navigationOptions:{
          headerVisible: false,
        }
    }, 
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;