import React from 'react';
import { View, StatusBar, NavigationContainer} from 'react-native';


import { Image, Dimensions} from 'react-native';
import {
  Block, Button, Input, NavBar,Text
} from 'galio-framework';
import theme from '../theme';
const { height, width } = Dimensions.get('window');
//import Landing from './src/screens/Landing'; 
import Login from './Login';
import Menu from './Menu';


class Landing extends React.Component{
  render(){
    return(
      //
      <Block flex safe style={{backgroundColor: theme.COLORS.BLUE}}>
        <Block flex center style={{ marginTop: theme.SIZES.BASE * 8, marginBottom: height * 0.05 }}>
          <Image source = {require('../../assets/Vector.png')}></Image>
          <Text center size={theme.SIZES.FONT * 3} 
            style={{color: theme.COLORS.WHITE, fontFamily: 'header',fontWeight: 800, paddingHorizontal: theme.SIZES.BASE * 3 }} >
            vLineMan
          </Text>
              
          <Text size={theme.SIZES.FONT * 1.3} style={{color: theme.COLORS.WHITE}} > Work management made easy </Text>
          <Block flex middle>
            <View marginBottom='3'>
              <Button
                round
                color={theme.COLORS.LIGHTBLUE}
                //onPress={() => this.props.navigation.navigate('Login') }  
              > 
                Get Started
              </Button>
              <View style={{height: height*1}}></View>
              <Button>
                round
                color={theme.COLORS.LIGHTBLUE}
                onPress={() => this.props.navigation.navigate('Login') }  
              > 
                Login
              </Button>
            
            </View>
              
            
              
              
      </Block>
      <Text bottom size={theme.SIZES.FONT * 1} style={{color: theme.COLORS.WHITE}}> Vidrona Ltd. Copyrights 2021 </Text>
    </Block>
    </Block>
    );
  }
}

export default Landing;
