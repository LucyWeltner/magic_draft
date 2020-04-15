import React from 'react'
import {connect} from 'react-redux'
import {draftCard} from '../actions.js'


	// <button onClick = (event) => this.props.dispatch(draftCard(event.target))>

class Card extends React.Component {
	render() {
		return (
			<img src={this.props.card}
		)
	}
}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

export default connect(getPropsFromState)(Card)


