import React, {setUser, setCookie} from 'react';
import {
  Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Platform, Image
} from 'react-native';

// galio component
import {
  Block, Button, Input, NavBar, Text,
} from 'galio-framework';
import Menu from './Menu';
import theme from '../theme';

const { height, width } = Dimensions.get('window');



class Login extends React.Component {
  state = {
    email: '-',
    password: '-',
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

  navCall =(response) =>{
    if(response.status==="200")
      this.props.navigation.navigate('Library');

  }

    loginAuth = async(email,password)=>{
      Alert.alert("hello");
      if(email!="" && password!="")
      {
      await fetch('https://vnautilus.vidrona.com/vUserAuthentication/login', {
      method: 'post',
      body: JSON.stringify({
        email_id: email,
        password: password
      })
    })
      .then(checkStatus)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        setCookie('user', JSON.stringify(user));
      
      })
      
      .catch(console.log);
      
      }
      //Alert.alert("bye");
      
      
    };


  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;



   

    return (
      <Block safe flex center style={{ backgroundColor: theme.COLORS.BLUE }}>
        
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
          <Block flex center style={{backgroundColor:theme.COLORS.BLUE,  marginTop: theme.SIZES.BASE * 5 }}>
           
            <Text center size={theme.SIZES.FONT * 3} style={{color:theme.COLORS.WHITE,fontFamily:'normal', paddingHorizontal: theme.SIZES.BASE * 3 }}>
              Login
            </Text>
            <Block style={{ marginTop: theme.SIZES.BASE * 1}}>
              <Text  size={theme.SIZES.FONT * 1} style={{fontFamily:'normal', color: theme.COLORS.WHITE}}> 
                Please log In to continue </Text>
            </Block>
            
          </Block>

          <Block flex={2} center space="evenly">
            <Block flex={2}>
              <Input
                rounded
                type="email-address"
                placeholder="username"
                autoCapitalize="none"
                style={{ width: width * 0.8, height: height* 0.06 }}
                onChangeText={text => this.handleChange('email', text)}
              />
              <Input
                rounded
                password
                viewPass
                placeholder="Password"
                style={{ width: width * 0.8, height: height* 0.06}}
                onChangeText={text => this.handleChange('password', text)}
              />
              <Text
                color={theme.COLORS.WHITE}
                size={theme.SIZES.FONT * 0.75}
                onPress={() => Alert.alert('Not implemented')}
                style={{ alignSelf: 'flex-end', lineHeight: theme.SIZES.FONT * 2 }}
              >
                Forgot your password?
              </Text>
              
            </Block>
            <Block flex middle>
              <Button
                style={{ width: width * 1, height: height* 0.06}}
                round
                color={theme.COLORS.LIGHTBLUE}
                onPress={() => this.props.navigation.navigate('Menu')}  //navigation.navigate('Library')
              > 
                Log in
              </Button>
              
            </Block>
            <Text bottom size={theme.SIZES.FONT * 1} style={{color:theme.COLORS.WHITE}}> Vidrona Ltd. Copyrights 2021 </Text>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: theme.SIZES.BASE * 0.3,
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.BLUE,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
  },
});

export default Login;
