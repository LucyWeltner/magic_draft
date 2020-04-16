import React from 'react'

export default class Homepage extends React.Component {
	render() {
		return (
			<main>
				<h2>Doin' Some Magic</h2>
				<nav><a href="/draft">Draft A Deck</a><a href="/decks">See Your Decks</a></nav>
			</main>
		)
	}
}