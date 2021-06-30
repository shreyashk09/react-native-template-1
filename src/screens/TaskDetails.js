/*import React, {useState} from 'react';
import {Image,  StyleSheet,  StatusBar,  ScrollView,  View,  Dimensions,  TouchableOpacity,CheckBox,  Platform} from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient'
import Constants from 'expo-constants';
// galio components
import { Accordion, Text, Block, Button, Card, NavBar, Input, Icon } from 'galio-framework';

import theme from '../theme';

const { width } = Dimensions.get('screen');

const data =[ [
  { title: "FAULT_ID_20201212_T008", content: "Lorem ipsum dolor sit amet", 
    icon: {
      name: 'keyboard-arrow-up',
      family: 'material',
      size: 16,
    } 
 },
 { title: "fault type", content: "Lorem ipsum dolor sit amet" },
  { title: "details", content: "Lorem ipsum dolor sit amet" },
  { title: "severity", content: "Lorem ipsum dolor sit amet" },
  { title: "days remaning", content: "Lorem ipsum dolor sit amet" }
  ],
  
];

export default class TaskDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    }
    onPress = () => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render(){
    
    return(
        <Block safe flex style={{ backgroundColor: theme.COLORS.BLUE }}>
          <Block safe flex style={{ backgroundColor: theme.COLORS.BLUE }}>
            <NavBar
                title="Task Detail"
                left={(
                  <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Icon 
                      name="menu"
                      family="feather"
                      size={theme.SIZES.BASE}
                      color={theme.COLORS.ICON}
                    />
                  </TouchableOpacity>
                )}
                style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
            />
          </Block>
          
          <Block style = {{marginTop: theme.SIZES.BASE * 2}}>
            <ScrollView contentContainerStyle={styles.scrollviewcards}>
              <Text   size={theme.SIZES.FONT * 1} color={theme.COLORS.LIGHTBLUE} >Task Status </Text>
              <Image source = {require('../../assets/task.png')}></Image>
              <Block flex space="between">
              {data && data.map((ele, id) => (
                  <Accordion dataArray={ele} style={styles.accordion}/>
              ))}
              </Block>
              <Block alignItems="left">

              <TouchableOpacity onPress={this.onPress}>
              <Text   size={theme.SIZES.FONT * 1} color={theme.COLORS.LIGHTBLUE} > Preparedness </Text>
              </TouchableOpacity>

              <CheckBox
                center
                title='Click Here'
                checked={this.state.isSelected}
              />

              <CheckBox
                value={this.state.isSelected}
                onPress={this.onPress}
                
              />
              <Text size={theme.SIZES.FONT * 1} color={theme.COLORS.WHITE}>Do you like React Native?</Text>
              <Text size={theme.SIZES.FONT * 1} color={theme.COLORS.WHITE}>Is CheckBox selected: {this.state.isSelected ? "👍" : "👎"}</Text>
              <Text   size={theme.SIZES.FONT * 1} color={theme.COLORS.WHITE}> During Maintenance </Text>
              <Text   size={theme.SIZES.FONT * 1} color={theme.COLORS.WHITE}> Reporting Maintenance</Text>
              </Block>
              
              
            </ScrollView>
          </Block>
        </Block>
    );
  }
}


const styles = StyleSheet.create({
  
  
  scrollviewcards: {
    width,
    backgroundColor: theme.COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  accordion: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.5,
    elevation: theme.SIZES.BASE / 2,
  },
  
   middle: {
    justifyContent: 'center',
  }
});

*/
