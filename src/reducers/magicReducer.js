
export default function magicReducer(state={deck: [], packs: [], current_pack: [], turn: 0}, action) {
	switch (action.type) {
		case 'get_packs':
			return {...state, packs: action.packs, current_pack: action.packs[0]}
		case 'next_pack':
			let newPacks = state.packs.map((pack, index) => {
				if (index !== (state.turn - 1)%6) {
					let number = Math.floor(Math.random*pack.length)
					pack.splice(number, 1)
					return pack
				}
				else {
					return pack
				}
			})
			console.log(newPacks)
			return {...state, packs: newPacks, current_pack: newPacks[state.turn%6]}
		case 'draft_card':
			let currentPackCopy = state.current_pack.slice()
			let index = state.current_pack.findIndex(card => card.name === action.name)
			let card = state.current_pack.find(card => card.name === action.name)
			currentPackCopy.splice(index, 1)
			return {turn: state.turn + 1, packs: [...state.packs.slice(0, state.turn%6), currentPackCopy, ...state.packs.slice(state.turn%6+1)], current_pack: currentPackCopy, deck: [...state.deck, card]}
		default:
			return state
	}
}