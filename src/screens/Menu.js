import React from 'react';
import { View, StatusBar, NavigationContainer } from 'react-native';
import GalioApp from '../../routes';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} />
          <GalioApp />
      </View>
    );
  }
}
