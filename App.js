import React from 'react';
import {Text, View, Platform,Image} from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';
import { NativeBaseProvider } from 'native-base';

export default class App extends React.Component {
  state = {
    currentScreen: "search"
  }
  switchScreen = (currentScreen) =>{
    this.setState({currentScreen});
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === "search"){
      return(
        <Search />
      )
    }
  }
  render() {
    return (
      <NativeBaseProvider>
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
      </NativeBaseProvider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}