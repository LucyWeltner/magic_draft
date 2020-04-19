import React from 'react'
import Card from './card.js'

export default class Deck extends React.Component {
	removeCard = (card_id) => {
		let configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({card_id: card_id})
		}
		fetch(`http://localhost:3000/decks/${this.props.deck.id}/card_in_decks/${card_id}`, configObj)
	}

	render() {
		return (
			<div id={this.props.deck.id} class="deck">
				<h3>Name of Deck: {this.props.deck.name}</h3>
				<p><b>Comments:</b> {this.props.deck.comments}</p>
				<h3>Cards:</h3>
				{this.props.deck.cards.map((card, index) => <Card card={card} key={index} removeCard={this.removeCard}/>)}
			</div>
		)
	}
}