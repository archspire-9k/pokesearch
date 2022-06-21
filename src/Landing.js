import React from 'react';
import {Text, View, Platform,Image, Button} from 'react-native';
//import {Button} from 'native-base';

var myBackGround = require('D:/Projects/pokesearch/assets/icons/landing.jpg');

class Landing extends React.Component {
  state = {
    screen: 'Loading'
  }

render() {
  return (
    <View style = {styles.viewStyle} >
       <Image 
          source = {myBackGround} /> 
          <View style = {styles.viewStyle}>
            <Text style = {styles.titleStyle}> Welcome to PokeSearch </Text>
            <Button block = {true}
                    style = {styles.buttonStyle}
                    titleStyle = {styles.buttonText}
                    onPress = {()=>{}}
                    title = 'Welcome'
                  ></Button>

          </View>
        
    </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    alignItems: 'center',
    color: 'blue'
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: 'white',
  }
}

export default Landing;