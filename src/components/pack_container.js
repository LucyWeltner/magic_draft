import React from 'react'
import {connect} from 'react-redux'
import {nextPack, draftCard} from '../actions.js'


class packContainer {


}

const getPropsFromState = (state) => {
	return {current_pack: state.current_pack}
}

export default connect(getPropsFromState)(packContainer)
