import React from 'react'
import {connect} from 'react-redux'
import {draftCard} from '../actions.js'


class Card extends React.Component {
	handleClick = (event) => {
		this.props.draftCard(event.target.name)
	}

	handleRemove = (event) => {
		this.props.removeCard(this.props.card.id)
		let button = event.target
		button.parentNode.remove()
	}
	render() {
		if (this.props.removeCard) {
			return (
				<div class="card">
					<img src={this.props.card.image_url} alt={this.props.card.name} name={this.props.card.name} class="card-img" />
					<br />
					<button onClick={this.handleRemove}>Remove Card From Deck</button>
				</div>
			)
		}
		else {
			return (
				<img src={this.props.card.image_url} alt={this.props.card.name} name={this.props.card.name} class="card-img" onClick={(event) => this.handleClick(event)} />
			)
		}

	}
}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

const mapDispatchToProps = (dispatch) => {
	return {draftCard: (name) => dispatch(draftCard(name))}
}

export default connect(getPropsFromState, mapDispatchToProps)(Card)


