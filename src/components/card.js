import React from 'react'
import {connect} from 'react-redux'
import {draftCard} from '../actions.js'


class Card extends React.Component {
	handleClick = (event) => {
		this.props.draftCard(event.target.name)
	}
	render() {
		return (
			<img src={this.props.card.image_url} alt={this.props.card.name} name={this.props.card.name} style={{height: "200px"}} onClick={(event) => this.handleClick(event)} />
		)
	}
}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

const mapDispatchToProps = (dispatch) => {
	return {draftCard: (name) => dispatch(draftCard(name))}
}

export default connect(getPropsFromState, mapDispatchToProps)(Card)


