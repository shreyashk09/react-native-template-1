import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

// galio components
import {
  DeckSwiper, Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { width, height } = Dimensions.get('screen');

const bgImage = 'https://o.quizlet.com/dNj4An7Ihn4m4WGF-pS2Qw.jpg';//'https://images.unsplash.com/photo-1516651029879-bcd191e7d33b?fit=crop&w=900&q=80';
const elements = [
    <Image
      source={{ uri: bgImage }}
      resizeMode="contain"
      style={{
        width,
        height: height * 0.85,
        backgroundColor: theme.COLORS.WHITE
      }}
    />,
    <Image
      source={{ uri: bgImage }}
      resizeMode="contain"
      style={{
        width,
        height: height * 0.85,
        marginLeft: -10,
        backgroundColor: theme.COLORS.WHITE
      }}
    />,
    <Image
      source={{ uri: bgImage }}
      resizeMode="contain"
      style={{
        width,
        height: height * 0.85,
        marginLeft: -10,
        backgroundColor: theme.COLORS.WHITE
      }}
    />,
    <Image
      source={{ uri: bgImage }}
      resizeMode="contain"
      style={{
        width,
        height: height * 0.85,
        marginLeft: -10,
        backgroundColor: theme.COLORS.WHITE
      }}
    />
];
const FlashCard = props => (
  <Block>
    <StatusBar barStyle="light-content" />
    <Block style={styles.navbar}>
      <NavBar transparent left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={theme.SIZES.BASE}
                color={theme.COLORS.BLACK}
              />
            </TouchableOpacity>
          )} />
    </Block>
    <Block  style={{
      width: width * 0.90,
      height: height * 0.85,
      backgroundColor: theme.COLORS.WHITE,
      marginLeft: -30
      }}>
    <DeckSwiper components={elements} />
    </Block>
    <Block center style={{ marginTop: -theme.SIZES.BASE * 2 }}>
      <ScrollView contentContainerStyle={styles.header}>
        <Block>
          <Text size={theme.SIZES.BASE * 1.875}>Blood Sugar</Text>
          <Text muted t size={theme.SIZES.BASE * 0.975} style={{ fontWeight: '500' }}>
          Medicine: Diabetes Mellitus
        </Text>
        </Block>
        <Block>
        <Text muted t size={theme.SIZES.BASE * 0.775} style={{ marginTop: theme.SIZES.BASE, fontWeight: '500' }}>
          Notes:
        </Text>
          <Text style={styles.text}>
            Blood sugar, or glucose, is the main sugar found in your blood. It comes from the food you eat, and is your body's main source of energy. Your blood carries glucose to all of your body's cells to use for energy.

Diabetes is a disease in which your blood sugar levels are too high. Over time, having too much glucose in your blood can cause serious problems. Even if you don't have diabetes, sometimes you may have problems with blood sugar that is too low or too high. Keeping a regular schedule of eating, activity, and taking any medicines you need can help.

If you do have diabetes, it is very important to keep your blood sugar numbers in your target range. You may need to check your blood sugar several times each day. Your health care provider will also do a blood test called an A1C. It checks your average blood sugar level over the past three months. If your blood sugar is too high, you may need to take medicines and/or follow a special diet.
          </Text>
        </Block>
    </ScrollView>
  </Block>
  </Block>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.COLORS.WHITE,
    borderTopLeftRadius: theme.SIZES.BASE * 2,
    borderTopRightRadius: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    width,
  },
  navbar: {
    top: statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 9999,
    position: 'absolute',
  },
  stats: {
    borderWidth: 0,
    width: width - theme.SIZES.BASE * 2,
    height: theme.SIZES.BASE * 4,
    marginVertical: theme.SIZES.BASE * 0.875,
  },
  title: {
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASE / 2,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.SIZES.FONT * 0.875,
    lineHeight: theme.SIZES.FONT * 1.25,
  },
});

export default FlashCard;
