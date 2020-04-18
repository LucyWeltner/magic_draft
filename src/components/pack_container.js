import React from 'react'
import {connect} from 'react-redux'
import Card from './card.js'
import DeckForm from './deck_form.js'
import {getPacks, saveDeck} from '../actions.js'

class PackContainer extends React.Component {
	state= {packs_counter: 0}
	render() {
		console.log(this.props.packs)
		if (this.props.current_pack.length > 0 && this.state.packs_counter < 3) {
			return (
				<div>
					<p>Pack Goes Here</p>
					<div id="cards">{this.props.current_pack.map((card, index) => <Card key={index} card={card}/>)}</div>
					<p></p>
				</div>
			)
		}
		else {
			return (
				<div>
					{(this.state.packs_counter < 2) ? 
						(<p><button onClick = {() => {this.props.getPacks(); this.setState(prevState => ({packs_counter: prevState.packs_counter + 1}))}} >Next Set of Packs</button></p>) : 
						(<div><p>You're Done! Would you like to save your deck?</p> <DeckForm /></div>)}
				</div>
			)
		}
	}
}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack, packs: state.packs}
}

const getPropsFromDispatch = (dispatch) => {
	return {getPacks: () => dispatch(getPacks()), saveDeck: (deck) => dispatch(saveDeck(deck))}
}

export default connect(getPropsFromState, getPropsFromDispatch)(PackContainer)
