import React from 'react';
import { ScrollView, Text, Image, ImageBackground, View, Dimensions, SectionList, StatusBar } from 'react-native';
import {  } from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

const Item = ({ title }) => (
	<View style={styles.item}>
	  <Text style={styles.title}>{title}</Text>
	</View>
  );
  

class SearchBody extends React.Component {
	render() {
		var pokemon = this.props.data;
		if (!pokemon) {
			return <View />
		}
		return (

			<ImageBackground
				style={styles.backgroundImage}
				source={{ uri: "http://pokemongolive.com/img/posts/raids_loading.png" }}
				resizeMode="cover"
			>
				<ScrollView style={{ flex: 1 }}>

					<Text style={styles.header}> #{pokemon.id} - {pokemon.name.toUpperCase()} </Text>
					<View style={styles.viewStyle}>
						<Image
							source={{ uri: pokemon.sprites.front_default }}
							style={styles.img}
						/>
					</View>
					<View style={styles.info}>
						<SectionList
							sections={[
								{ title: 'Size', data: ["Weight - " + pokemon.weight + 'kg', 'Height - ' + pokemon.height/10 + 'm' ]},
							]}
							renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
							renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
							keyExtractor={(item, index) => index}
						/>
						<SectionList
							sections={[
								{ title: 'Abilities', data: pokemon.abilities},
							]}
							renderItem={({ item }) => <Text style={styles.item}>{item.ability.name}</Text>}
							renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
							keyExtractor={(item, index) => index}
						/>

					</View>


				</ScrollView>
			</ImageBackground>




		)
	}
}

const styles = {
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
		height: height,
		width: width,

	},
	header: {
		fontSize: 30,
		color: 'red',
		textAlign: 'center'
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	img: {
		height: 200,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	info: {
		flex: 1,
		backgroundColor: 'white',
		opacity: 0.8
	},
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		marginHorizontal: 16
	  },
	  item: {
		backgroundColor: "#f9c2ff",
		marginVertical: 8,
		padding: 10,
    	fontSize: 18,
    	height: 44,
	  },
	  title: {
		fontSize: 24
	  },
	  sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)',
	  },

}


export default SearchBody;