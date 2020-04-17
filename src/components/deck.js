import React from 'react'

export default class Deck extends React.Component {
	render() {
		return (
			<div>
				<h3>Name of Deck: {this.props.deck.name}</h3>
				<p><b>Comments:</b> {this.props.deck.comments}</p>
				<h3>Cards:</h3>
				{this.props.deck.cards.map(card => <img src={card.image_url} alt={card.name} key={card.id}/>)}
			</div>
		)
	}
}