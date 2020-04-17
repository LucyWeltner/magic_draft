import React from 'react'
import {connect} from 'react-redux'
import Card from './card.js'

class DeckContainer extends React.Component {
	render() {
		return(
			<div>
				<p>Your Current Deck:</p>
				<div>{this.props.deck.map((card, index) => <Card card={card} key={index}/>)}</div>
			</div>
		)
	}
}

const getPropsFromState = (state) => {
	return {deck: state.deck}
}

export default connect(getPropsFromState)(DeckContainer)