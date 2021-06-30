import React from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
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
  [
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
  [
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
  [
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
  [
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
  ]];

class Library extends React.Component{
  render(){
    return(
        <Block flex safe style={{ backgroundColor: theme.COLORS.BLUE }}>
    
    <Block safe flex style={{ backgroundColor: theme.COLORS.BLUE }}>
     <NavBar
          title="My Tasks"
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
    <Block style = {{marginTop: theme.SIZES.BASE * 4, backgroundColor: theme.COLORS.BLUE}}>
      <ScrollView contentContainerStyle={styles.scrollviewcards}>
        <Block flex space="between" style={{ backgroundColor: theme.COLORS.BLUE }}>
        {data && data.map((ele, id) => (
            <Accordion dataArray={ele} style={styles.accordion}/>
        ))}
        </Block>
      </ScrollView>
    </Block>
  </Block>
    );
  }
}


const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    bottom: 0,
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
  },
  scrollviewcards: {
    width,
    backgroundColor: theme.COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  accordion: {
    backgroundColor: theme.COLORS.CARD,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.5,
    elevation: theme.SIZES.BASE / 2,
  },
  button: {
    marginBottom: 20,
  }
});

export default Library;