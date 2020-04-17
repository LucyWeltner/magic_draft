import React from 'react'
import DeckForm from './deck_form.js'

export default class Homepage extends React.Component {
	render() {
		return (
			<main>
				<h2>Doin' Some Magic</h2>
				<nav><a href="/draft">Draft A Deck</a><span>   </span><a href="/decks">See Your Decks</a></nav>
				<DeckForm />
			</main>
		)
	}
}