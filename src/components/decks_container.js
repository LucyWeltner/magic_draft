import React from 'react'
import {connect} from 'react-redux'

export default class DecksContainer extends React.Component {
	state = {
		decks: []
	}
	componentDidMount() {
		fetch('localhost:3000/decks').then(response => reponse.json())
		.then(decks => this.setState({decks}, () => console.log(state)))
	}
	render() {
		return (
			<React.Fragment>
				<h2>Decks Go Here</h2>
				<{this.state.decks.map(deck => <Deck key={deck.id} deck={deck}/>)}
			</React.Fragment>
		)
	}
}
