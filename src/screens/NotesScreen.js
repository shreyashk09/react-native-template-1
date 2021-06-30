import React from 'react';
import {
  ScrollView, StyleSheet, Dimensions, Platform, TouchableOpacity, View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon as RIcon} from 'react-native-elements'
// Galio components
import {
  Card, Block, NavBar, Icon, Text, Button
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');

const folders = [
  [{
    id: 1,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 2,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 4,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 5,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  }],
   [{
    id: 1,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 2,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
  },
  {
    id: 3,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 4,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 5,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  },
  {
    id: 6,
    avatar: 'http://i.pravatar.cc/100',
    title: 'Christopher Moon',
    caption: '138 minutes ago',
    location: 'Los Angeles, CA',
    padded: true,
  }]
];

export default class NotesCards extends React.Component {
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
            {folders && folders.map((cards) => (
              <Block flex style={{marginVertical: theme.SIZES.BASE * 0.275}}>
                <Block style={{flexDirection:"", flexWrap: ""}}>
                  <Text style={styles.folderText}>Folder</Text>
                </Block>
                <Block
                  flex
                  borderless
                  style={styles.folder}
                  >
                {cards && cards.map((card, id) => (
                  <Card
                    key={`card-${card.image}`}
                    flex
                    borderless
                    titleColor={card.full ? theme.COLORS.BLACK : null}
                    style={styles.card}
                    title={card.title}
                    caption={card.caption}
                    location={card.location}
                    avatar={`${card.avatar}?${id}`}
                    image={card.image}
                    imageStyle={[card.padded ? styles.rounded : null]}
                    imageBlockStyle={[
                      card.padded ? { padding: theme.SIZES.BASE / 4 } : null,
                      card.full ? null : styles.noRadius,
                    ]}
                  >
                </Card>
              ))}
              </Block>
            </Block>
          ))}
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
    backgroundColor: "#F5F5F5",
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
    backgroundColor: theme.COLORS.WHITE,//"#F5F5F5",
    borderBottomWidth: 1,
    borderColor: theme.COLORS.BLACK,
    // borderRadius: theme.SIZES.BASE * 0,
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
