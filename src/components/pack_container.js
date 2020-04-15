import React from 'react'
import {connect} from 'react-redux'
import {nextPack} from '../actions.js'
import Card from './card.js'

class PackContainer extends React.Component {
	render() {
		console.log(this.props.current_pack)
		return (
			<div>
				<p>Pack Goes Here</p>
				<div id="cards">{this.props.current_pack.map((card, index) => <Card key={index}, card={card}/>)}</div>
				<button>Next Pack</button>
			</div>
		)
	}
}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

export default connect(getPropsFromState)(PackContainer)
