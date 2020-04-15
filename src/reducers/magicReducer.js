
export default function magicReducer(state={deck: [], packs: [], current_pack: [], turn: 0}, action) {
	switch (action.type) {
		case 'get_packs':
			return {...state, packs: action.packs, current_pack: action.packs[0]}
		case 'next_pack':
			let newPacks = state.packs.map(pack => pack.slice())
			newPacks = newPacks.filter((pack, index) => index !== state.turn%7)
			newPacks.forEach(pack => {
				let number = Math.floor(Math.random*pack.length)
				pack.splice(number, 1)
			})
			return {...state, packs: newPacks, current_pack: newPacks[state.turn%7], turn: state.turn+1}
		case 'draft_card':
			let currentPackCopy = state.current_pack.slice()
			let index = state.current_pack.findIndex(card => card.id === action.card.id)
			return {...state, current_pack: [currentPackCopy.splice(index, 1)], deck: [...state.deck, action.card]}
		default:
			return state
	}
}