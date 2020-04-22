import React from 'react'
import {connect} from 'react-redux'

class DeckForm extends React.Component {
	state = {
		name: "",
		comments: ""
	}

	saveDeck = (deck) => {
		let configObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(deck),
		}
		fetch('http://localhost:3000/decks', configObj).then(response => response.json()).then(json => console.log(json)).then(() => window.location.replace("/decks"))
		.catch(error => {
    		alert(`There was an error ${error.message}`)
  		})
	}

	handleChange = (event) => {
		let obj = {}
		obj[`${event.target.name}`] = event.target.value
		this.setState(obj, () => console.log(this.state))
	}

	handleSubmit = (event) => {
		event.preventDefault()
		let deck_info = {name: this.state.name, comments: this.state.comments, cards: this.props.deck}
		this.saveDeck(deck_info)
		this.setState({name: "", comments: ""})
	}

	render() {
		return(
		<form onSubmit = {this.handleSubmit}>
			<p>Name of Deck:</p>
			<input type="text" name="name" onChange={this.handleChange} />
			<p>Comments:</p>
			<input type="text" name="comments" onChange={this.handleChange} />
			<br />
			<input type="submit" value="Save Deck"/>
		</form>
		)
	}

}

const getPropsFromState = (state) => {
	return {deck: state.deck}
}

export default connect(getPropsFromState)(DeckForm)