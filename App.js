import React from 'react';
import { View, StatusBar, NavigationContainer } from 'react-native';
import GalioApp from './routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Image, Dimensions} from 'react-native';
import { Block, Button, Input, NavBar, Text} from 'galio-framework';
import theme from './src/theme';

import AppContainer from './src/screens/Route';



export default props => {
  let [fontsLoaded] = useFonts({
    'header': require('./assets/fonts/Sarpanch-Regular.ttf'),
    //'normal': require('./assets/fonts/circularstd-book.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppContainer/>
    );
  }
};