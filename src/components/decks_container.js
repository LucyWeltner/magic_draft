import React from 'react'
import Deck from './deck.js'
import Header from './header.js'

export default class DecksContainer extends React.Component {
	state = {
		decks: []
	}
	componentDidMount() {
		fetch('http://localhost:3000/decks').then(response => response.json())
		.then(decks => this.setState({decks}, () => console.log(this.state)))
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				{this.state.decks.map(deck => <Deck key={deck.id} deck={deck}/>)}
			</React.Fragment>
		)
	}
}
