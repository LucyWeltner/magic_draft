import React from 'react'

export default class Deck extends React.Component {
	deleteCard = (card_id) => {
		let configObj = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({card_id: card_id})
		}
		fetch(`http://localhost:3000/decks/${this.props.deck.id}/cards/${card_id}`, configObj)
	}

	render() {
		return (
			<div id={this.props.deck.id}>
				<h3>Name of Deck: {this.props.deck.name}</h3>
				<p><b>Comments:</b> {this.props.deck.comments}</p>
				<h3>Cards:</h3>
				{this.props.deck.cards.map((card, index) => <img src={card.image_url} alt={card.name} style={{height: "200px"}} key={index} deleteCard={this.deleteCard}/>)}
			</div>
		)
	}
}