import React from 'react'
import {connect} from 'react-redux'
import {draftCard} from '../actions.js'


class packContainer {


}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

export default connect(getPropsFromState)(packContainer)


	onClick = (event) => this.props.dispatch(draftCard(event.target))