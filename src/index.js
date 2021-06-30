// import Block from './Block';
// import Button from './Button';
// import Card from './Card';
// import Icon from './Icon';
// import Input from './Input';
// import NavBar from './NavBar';
// import Text from './Text';

// export {
//   Block,
//   Button,
//   Card,
//   Icon,
//   Input,
//   NavBar,
//   Text,
// };
import Accordion from './components/Accordion';
import Block from './components/Block';
import Button from './components/atomic/atoms/Button';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import DeckSwiper from './components/DeckSwiper';
import Icon from './components/atomic/ions/Icon';
import Input from './components/atomic/atoms/Input';
import NavBar from './components/NavBar';
import Radio from './components/Radio';
import Slider from './components/Slider';
import Switch from './components/Switch';
import Text from './components/atomic/ions/Text';
import Toast from './components/Toast';
import Link from './components/atomic/atoms/Link';


import theme, { withGalio, GalioProvider, useGalioTheme } from './theme';

import galioConfig from './config/galio.json';

const GalioFont = require('./fonts/galio.ttf');

export {
  Accordion,
  Block,
  Button,
  Card,
  Checkbox,
  DeckSwiper,
  Icon,
  Input,
  NavBar,
  Radio,
  Slider,
  Text,
  Link,
  Toast,
  Switch,
  theme,
  withGalio,
  GalioProvider,
  useGalioTheme,
  galioConfig,
  GalioFont,
};