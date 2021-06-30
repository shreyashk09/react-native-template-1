import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity, View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon as RIcon} from 'react-native-elements'
// Galio components
import {
  Card, Block, NavBar, Icon, Text, Button, Input
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');

const notes = [{
    id: 1,
    
    title: 'New Task',
    caption: '138 minutes ago: ',
    location: 'Los Angeles, CA',
  },
  {
    id: 2,
    
    title: 'Deadline alert',
    caption: '138 minutes ago: ',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    
    title: 'Task rejecetd',
    caption: '138 minutes ago: ',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 4,
    
    title: 'Task accepted',
    caption: '138 minutes ago: ',
    location: 'Los Angeles, CA',
    padded: true,
  }];

export default class NotesCards extends React.Component {
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }
  render() {
    const { navigation } = this.props;
    return (
      <Block safe flex style={{ backgroundColor: "#F5F5F5" }}>
        <NavBar
          title="Notes"
          left={(
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.ICON}
              />
            </TouchableOpacity>
          )}
          style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null, {backgroundColor: "#F5F5F5"}}
        />
        
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            //add tiles
            
            <Block
              flex
              borderless
              style={styles.folder}
              >
            {notes && notes.map((card, id) => (
              <Block
                flex
                style={styles.card}
              >
                <Block style={{flexDirection:"row", flexWrap: "space-between"}}>
                  <Text style={{fontWeight:'bold', fontSize : 18}}>{card.title}</Text>
                  <Text style={{fontSize : 11}}>{card.caption}</Text>
                </Block>
                <Text style={{fontSize : 15,  paddingTop: 2}}>{card.location}</Text>
              </Block>
            ))}
          </Block>
        </Block>
      </ScrollView>
      <Block>
        <Block style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', borderTopWidth: 0, borderColor:theme.COLORS.BLACK}}>
          <RIcon
            rasied
            name="folder"
            family="feather"
            size={theme.SIZES.BASE * 1.75}
            color='#E8CA25'
            style={{padding: theme.SIZES.BASE*0.7}}
          />
          <RIcon
            rasied
            name="edit"
            family="feather"
            size={theme.SIZES.BASE * 1.75}
            color='#E8CA25'
            style={{padding: theme.SIZES.BASE*0.70}}
          />
        </Block>
      </Block>
    </Block>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.CARD,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  folder: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.275,
    padding: theme.SIZES.BASE *0.4,
    justifyContent:'left',
    borderRadius: theme.SIZES.BASE * 0.875,
    shadowColor: theme.COLORS.BLACK,
    shadowRadius: theme.SIZES.BASE * 0.875,
    shadowOpacity: 0.07,
    elevation: theme.SIZES.BASE * 2,
  },
  folderText: {
    fontWeight: 'bold',
    marginLeft: theme.SIZES.BASE * 0.4,
    backgroundColor: "#F5F5F5",//theme.COLORS.WHITE,
    marginTop: theme.SIZES.BASE * 0.275,
    elevation: theme.SIZES.BASE / 2,
    padding: theme.SIZES.BASE * 0.4,
    justifyContent:'left',
    fontSize : 21
  },
  card: {
    marginLeft: theme.SIZES.BASE * 0.4,
    marginRight: theme.SIZES.BASE * 0.4,
    paddingVertical: theme.SIZES.BASE ,
    backgroundColor: theme.COLORS.WHITE,
    borderBottomWidth: 1,
    borderColor: theme.COLORS.BLACK,
    shadowColor: theme.COLORS.WHITE
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  }
});
