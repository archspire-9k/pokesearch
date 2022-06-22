//import stuff
import React from 'react';
import { View, TextInput, StyleSheet, Alert, Button, SafeAreaView } from 'react-native';
import { Header, Item, Icon, Input} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

//create stuff
class Search extends React.Component {
	state = {
		pokeSearch: "",
		onCall: true,
		data: {}
	}


	searchPoke = () => {
		this.setState({ onCall: true });
		if (this.state.pokeSearch === "") {
			return;
		}
		var self = this;
		// console.log("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase());

		// axios({
		// 	method: 'post',
		// 	url: '/user/12345',
		// 	data: {
		// 	  firstName: 'Fred',
		// 	  lastName: 'Flintstone'
		// 	}
		//   });
		axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
			.then(function (response) {
				 console.log(response.data);
				
				self.setState({ data: response.data });
				self.setState({ onCall: false });
			})
			.catch(function (error) {
				Alert.alert("Error", "Pokemon not found");
				if (error.response) {
				  // The request was made and the server responded with a status code
				  // that falls out of the range of 2xx
				  console.log(error.response.data);
				  console.log(error.response.status);
				  console.log(error.response.headers);
				} else if (error.request) {
				  // The request was made but no response was received
				  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				  // http.ClientRequest in node.js
				  console.log(error.request);
				} else {
				  // Something happened in setting up the request that triggered an Error
				  console.log('Error', error.message);
				}
				console.log(error.config);
			  });
	}
	renderBody = () => {
		if (this.state.onCall) {
			return (
				<PokeLoader />
			)
		}
		else {
			return (
				<SearchBody data={this.state.data} />
			)
		}
	}

	render() {

		return (
			<SafeAreaView style={{flex: 1}}>
				<View style={{ flex: 1 }}>
					<Button title = 'search'
							onPress={this.searchPoke}
							color="#841584"></Button>
					<TextInput
						style={styles.input}
						value={this.state.pokeSearch}
						placeholder="Search Pokemon"
						onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
					/>



					{this.renderBody()}
				</View>
		</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

//export stuff
export default Search;