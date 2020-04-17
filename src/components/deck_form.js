import React from 'react'
import {connect} from 'react-redux'

class DeckForm extends React.Component {
	state = {
		name: ""
		comments: ""
	}
	handleChange = (event) => {
		let obj = {}
		obj[`${event.target.name}`] = event.target.value
		this.setState(obj)
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let deck_info = {name: this.state.name, comments: this.state.comments, cards: this.props.deck}
		console.log(deck_info)
		this.props.saveDeck(deck_info)
		this.setState({name: "", comments: ""})
	}

	render() {
		<form onSubmit = {this.handleSubmit}>
			<p>Name of Deck:</p>
			<input type="text" name="name" onChange={this.handleChange} />
			<p>Comments:</p>
			<input type="text" name="comments" onChange={this.handleChange} />
			<input type="submit">Save Deck</input>
		</form>
	}

}

const getPropsFromState = (state) => {
	return {deck: state.deck}
}

const getPropsFromDispatch = (dispatch) => {
	return {saveDeck: (deck) => dispatch(saveDeck(deck))}
}

export default connect(getPropsFromState, getPropsFromDispatch)(DeckForm)