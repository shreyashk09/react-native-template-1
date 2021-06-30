import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, SafeAreaView, Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItems,
} from 'react-navigation-drawer';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// screens

import Article from './src/screens/Article';
import Home from './src/screens/Home';
//import HomeAppContainer from './src/screens/HomeRoute';
import Completed from './src/screens/Completed';
import Library from './src/screens/Library';
import ArticleCover from './src/screens/ArticleCover';
import TaskDetails from './src/screens/TaskDetails';
import Cards from './src/screens/Cards';
import Components from './src/screens/Components';
import Login from './src/screens/Login';
import News from './src/screens/News';
import OrderConfirmed from './src/screens/OrderConfirmed';
import Presentation from './src/screens/Presentation';
import Dashboard from './src/screens/Dashboard';
import Register from './src/screens/Register';
import Registerv2 from './src/screens/Registerv2';
import Grid from './src/screens/Grid';
import Memrise from './src/screens/Memrise';
import FlashCards from './src/screens/FlashCards';
import VideoCards from './src/screens/VideoCards';
import NotesCards from './src/screens/NotesCards';

import theme from './src/theme';
import { Block, Icon, Text } from 'galio-framework';

const GalioDrawer = props => (
  <SafeAreaView style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}>
    <Block space="between" row style={styles.header}>
      <Block flex={0.3}><Image source={{ uri: 'http://i.pravatar.cc/100' }} style={styles.avatar} /></Block>
      <Block flex style={styles.middle}>
        <Text size={theme.SIZES.FONT * 1.2} color={theme.COLORS.WHITE} fontWeight="bold">UserName</Text>
        <Text size={theme.SIZES.FONT * 1} color={theme.COLORS.GREEN}>Available</Text>
      </Block>
    </Block>
    <ScrollView backgroundColor={theme.COLORS.BLUE}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : null,
    backgroundColor: theme.COLORS.BLUE,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

const MenuIcon = ({ name, family, focused }) => (
  <Icon
    name={name}
    family={family}
    size={theme.SIZES.FONT}
    color={focused ? theme.COLORS.BLACK : theme.COLORS.WHITE}
  />
);

MenuIcon.defaultProps = {
  name: null,
  family: null,
  focused: false,
};

MenuIcon.propTypes = {
  name: PropTypes.string,
  family: PropTypes.string,
  focused: PropTypes.bool,
};
// NotesCards
const screens = {
  /*Landing: {
    screen: Landing,
    navigationOptions: {
      drawerLabel: 'Landing',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  /*Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: 'Login Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },*/
  Completed: {
    screen: Completed, //tasks screen
    navigationOptions: {
      drawerLabel: 'Completed Tasks',
      drawerIcon: props => <MenuIcon name="history" family="font-awesome" focused={props.focused} />,
    },
  },

  Home: {
    screen: Home, //tasks screen + map
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: props => <MenuIcon name="home" family="font-awesome" focused={props.focused} />,
    },
  },
  /*TaskDetail: {
    screen: TaskDetails, //on clicking on a task
    navigationOptions: {
      drawerLabel: 'TaskDetail',
      drawerIcon: props => <MenuIcon name="home" family="font-awesome" focused={props.focused} />,
    },
  },*/
  
  
  Library: {
    screen: Library, //tasks screen
    navigationOptions: {
      drawerLabel: 'MyTasks',
      drawerIcon: props => <MenuIcon name="check" family="font-awesome" focused={props.focused} />,
    },
  },
  
  NotesCards: {
    screen: NotesCards, //notification screen
    navigationOptions: {
      drawerLabel: 'Notifications',
      drawerIcon: props => <MenuIcon name="bell" family="font-awesome" focused={props.focused} />,
    },
  },
  
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  
  Memrise: {
    screen: Memrise,
    navigationOptions: {
      drawerLabel: 'Memrise',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  FlashCards: {
    screen: FlashCards,
    navigationOptions: {
      drawerLabel: 'Flash Cards',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  VideoCards: {
    screen: VideoCards,
    navigationOptions: {
      drawerLabel: 'Video Cards',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  

  Home2: {
    screen: Components,
    navigationOptions: {
      drawerLabel: 'Components',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      drawerLabel: 'Cards',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Article: {
    screen: Article,
    navigationOptions: {
      drawerLabel: 'Article Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  ArticleCover: {
    screen: ArticleCover,
    navigationOptions: {
      drawerLabel: 'Article Cover',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      drawerLabel: 'News Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    }, 
  },
  OrderConfirmed: {
    screen: OrderConfirmed,
    navigationOptions: {
      drawerLabel: 'Order Confirmed',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Presentation: {
    screen: Presentation,
    navigationOptions: {
      drawerLabel: 'Presentation Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  
  Register: { //notneeded
    screen: Register,
    navigationOptions: {
      drawerLabel: 'Register Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  Registerv2: { //notneeded
    screen: Registerv2,
    navigationOptions: {
      drawerLabel: 'Register Screen v2',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },
  
  /*Grid: {
    screen: Grid,
    navigationOptions: {
      drawerLabel: 'Grid Screen',
      drawerIcon: props => <MenuIcon name="flag" family="font-awesome" focused={props.focused} />,
    },
  },*/
};

const options = {
  contentComponent: props => <GalioDrawer {...props} />,
  contentOptions: {
    labelStyle: {
      fontWeight: '500',
      color: theme.COLORS.WHITE,
      fontSize: theme.SIZES.FONT,
      marginLeft: theme.SIZES.BASE * 0.75,
    },
    activeLabelStyle: {
      color: theme.COLORS.BLACK,
    },
    activeBackgroundColor: theme.COLORS.WHITE,
    itemsContainerStyle: {
      paddingVertical: 0,
    },
    iconContainerStyle: {
      marginHorizontal: 0,
      marginLeft: theme.SIZES.BASE * 1.65,
      // marginRight: theme.SIZES.BASE * 0.76,
    },
  },
};

const GalioApp = createDrawerNavigator(screens, options);
const App = createAppContainer(GalioApp);

export default App;
// export default GalioApp;